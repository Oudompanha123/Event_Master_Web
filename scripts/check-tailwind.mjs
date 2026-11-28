#!/usr/bin/env node
// Checks that Tailwind scans every source file that uses CSS classes.
//
// Tailwind only generates the classes it finds in the files it scans. A file it skips still
// builds and type-checks fine, but its classes silently disappear from the CSS and that part of
// the UI renders unstyled (this happened after the Feature-Sliced Design move, when the v3
// `content` list still named src/app and src/components only).
//
// Tailwind v4 (CSS-first, src/app/globals.css): files are found automatically from the project
// root, skipping anything git ignores, unless `@import "tailwindcss" source(...)` narrows the base
// or turns detection off (`source(none)`), in which case only `@source` paths count.
// Tailwind v3 (tailwind.config.js `content`) is still understood, in case it comes back.
// Exit code 1 if any file using classes would not be scanned.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const rel = (p) => p.split(path.sep).join("/");

/** All files under dir, as paths relative to the project root (no dependencies needed). */
const SKIP = new Set(["node_modules", ".next", ".git", "chromium_cli"]);
function walk(dir, out = []) {
  for (const name of fs.readdirSync(path.join(root, dir))) {
    if (SKIP.has(name)) continue;
    const p = dir ? `${dir}/${name}` : name;
    if (fs.statSync(path.join(root, p)).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

/** Minimal glob -> RegExp: **, *, ? and {a,b}; enough for Tailwind content/@source patterns. */
const escapeRe = (text) => text.replace(/[.+^$()|[\]\\]/g, "\\$&");

function globToRegExp(glob) {
  let re = "";
  for (let i = 0; i < glob.length; i++) {
    const c = glob[i];
    if (c === "*" && glob[i + 1] === "*") {
      const slash = glob[i + 2] === "/";
      re += slash ? "(?:.*/)?" : ".*";
      i += slash ? 2 : 1;
    } else if (c === "*") re += "[^/]*";
    else if (c === "?") re += "[^/]";
    else if (c === "{") {
      const end = glob.indexOf("}", i);
      re += "(?:" + glob.slice(i + 1, end).split(",").map(escapeRe).join("|") + ")";
      i = end;
    } else re += escapeRe(c);
  }
  return new RegExp("^" + re + "$");
}
// the whole project is only walked when a glob actually needs matching (rare: @source / v3 content)
let allFiles;
const matchGlobs = (globs) => {
  allFiles ??= walk("");
  const res = globs.map(globToRegExp);
  return new Set(allFiles.filter((f) => res.some((r) => r.test(f))));
};

const sources = walk("src").filter((f) => /\.(js|jsx|ts|tsx|mdx)$/.test(f));
const usesClasses = (file) => /\bclassName\s*=|\bclassName:|\bclsx\(|\bcn\(/.test(fs.readFileSync(path.join(root, file), "utf8"));
const classFiles = sources.filter(usesClasses);

function fail(missing, how) {
  console.error(`Tailwind check failed: ${missing.length} file(s) use classes but Tailwind does not scan them (${how}),`);
  console.error("so their classes are never generated and those parts of the UI render unstyled:");
  for (const f of missing.slice(0, 20)) console.error("  " + f);
  if (missing.length > 20) console.error(`  ... and ${missing.length - 20} more`);
  process.exit(1);
}

const v3Config = ["tailwind.config.js", "tailwind.config.cjs", "tailwind.config.mjs", "tailwind.config.ts"].find((f) => fs.existsSync(path.join(root, f)));
const cssFile = path.join(root, "src/app/globals.css");
const css = fs.existsSync(cssFile) ? fs.readFileSync(cssFile, "utf8") : "";
const isV4 = /@import\s+["']tailwindcss["']/.test(css);

if (isV4) {
  // ---- Tailwind v4: automatic detection, optionally narrowed by source(...) / @source
  const importLine = css.match(/@import\s+["']tailwindcss["']([^;]*);/)?.[1] ?? "";
  const sourceArg = importLine.match(/source\(\s*(none|["'][^"']+["'])\s*\)/)?.[1];
  const cssDir = path.dirname(cssFile);
  const atSources = [...css.matchAll(/@source\s+(not\s+)?["']([^"']+)["']/g)];
  const toGlob = (p) => rel(path.relative(root, path.resolve(cssDir, p)));
  const included = atSources.filter((m) => !m[1]).map((m) => toGlob(m[2]));
  const excluded = atSources.filter((m) => m[1]).map((m) => toGlob(m[2]));

  // files matching .gitignore are never scanned by automatic detection; --no-index judges by the
  // patterns alone (like Tailwind does), also for files git already tracks
  const ignored = new Set();
  try {
    const out = execFileSync("git", ["check-ignore", "--no-index", "--stdin"], { cwd: root, input: classFiles.join("\n"), encoding: "utf8" });
    out.split(/\r?\n/).filter(Boolean).forEach((f) => ignored.add(rel(f)));
  } catch (e) {
    if (e.status !== 1) throw e; // status 1 = nothing ignored
  }

  let auto = new Set();
  if (sourceArg !== "none") {
    const base = sourceArg ? toGlob(sourceArg.slice(1, -1)) : ".";
    const prefix = base === "." ? "" : base.replace(/\/$/, "") + "/";
    auto = new Set(classFiles.filter((f) => f.startsWith(prefix) && !ignored.has(f)));
  }
  const explicit = included.length ? matchGlobs(included) : new Set();
  const notScanned = excluded.length ? matchGlobs(excluded) : new Set();
  const missing = classFiles.filter((f) => (!auto.has(f) && !explicit.has(f)) || notScanned.has(f));
  if (missing.length) {
    fail(missing, sourceArg === "none" ? "source(none) and no matching @source" : "git-ignored, outside the source() base, or excluded by @source not");
  }
  console.log(`Tailwind check passed (v4 automatic detection${sourceArg ? `, source(${sourceArg})` : ""}: ${classFiles.length} files with classes, all scanned).`);
} else if (v3Config) {
  // ---- Tailwind v3: content globs in the config
  const config = require(path.join(root, v3Config));
  const content = Array.isArray(config.content) ? config.content : config.content?.files ?? [];
  const globs = content.filter((c) => typeof c === "string").map((g) => g.replace(/^\.\//, ""));
  const covered = matchGlobs(globs);
  const missing = classFiles.filter((f) => !covered.has(f));
  if (missing.length) fail(missing, `not matched by content ${JSON.stringify(content)}`);
  console.log(`Tailwind check passed (v3 content: ${classFiles.length} files with classes, all covered).`);
} else {
  console.error("Tailwind check failed: found neither `@import \"tailwindcss\"` in src/app/globals.css nor a tailwind.config file.");
  process.exit(1);
}
