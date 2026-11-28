#!/usr/bin/env node
// Checks the Feature-Sliced Design rules described in README.md ("Project structure").
//   1. A layer only imports from layers below it: app > views > widgets > features > entities > shared
//   2. Another slice is imported through its public API (index.ts), not its ui/ or model/ files
//   3. Slices of the same layer do not import each other, except entities' server api/ code
//   4. api/ files are imported by path, never re-exported from a slice's index.ts
//   5. Server modules import client components from their own file, not through a slice index.ts
// Exit code 1 if any rule is broken.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "src");
const RANK = { app: 6, views: 5, widgets: 4, features: 3, entities: 2, shared: 1 };
const SLICED = ["views", "widgets", "features", "entities"];
const IMPORT_RE = /(?:import|export)\s[^'"]*?from\s*['"]@\/([^'"]+)['"]/g;

const posix = (p) => p.split(path.sep).join("/");
const layerOf = (p) => p.split("/")[0];
function sliceOf(p) {
  const parts = p.split("/");
  if (!SLICED.includes(parts[0])) return null;
  return parts.slice(0, parts[0] === "features" ? 3 : 2).join("/");
}
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

const files = [];
(function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(name) && !name.endsWith(".d.ts")) files.push(posix(path.relative(SRC, p)));
  }
})(SRC);

const problems = [];
for (const file of files) {
  const text = stripComments(fs.readFileSync(path.join(SRC, file), "utf8"));
  const layer = layerOf(file);
  const mySlice = sliceOf(file);
  const isClient = /^\s*["']use client["']/m.test(text.slice(0, 300));
  const isIndex = file.endsWith("/index.ts");

  for (const [, target] of text.matchAll(IMPORT_RE)) {
    const tLayer = layerOf(target);
    if (!RANK[tLayer] || !RANK[layer]) continue;
    const tSlice = sliceOf(target + "/x");
    const segment = tSlice ? target.slice(tSlice.length + 1).split("/")[0] : null;

    if (RANK[tLayer] > RANK[layer]) {
      problems.push(`${file}: imports from a higher layer (@/${target})`);
      continue;
    }
    if (!tSlice || tSlice === mySlice) continue;

    if (tLayer === layer && !(layer === "entities" && segment === "api")) {
      problems.push(`${file}: imports another slice of the same layer (@/${target})`);
    }
    // a server module may point straight at a component file; everyone else goes through index.ts
    if ((segment === "ui" || segment === "model") && isClient) {
      problems.push(`${file}: deep import, use the public API @/${tSlice} (@/${target})`);
    }
    if (target === tSlice && !isClient && !isIndex && layer !== "app" && hasClientExports(tSlice)) {
      problems.push(`${file}: server module imports @/${tSlice}/index.ts, which ships all its client components; import the file directly`);
    }
  }

  if (isIndex && mySlice && /from\s*['"]\.\/api\//.test(text)) {
    problems.push(`${file}: re-exports api/ code; import api/ files by path instead`);
  }
}

function hasClientExports(slice) {
  const index = path.join(SRC, slice, "index.ts");
  if (!fs.existsSync(index)) return false;
  for (const [, spec] of fs.readFileSync(index, "utf8").matchAll(/from\s*['"](\.\/[^'"]+)['"]/g)) {
    for (const ext of [".tsx", ".ts"]) {
      const f = path.join(SRC, slice, spec + ext);
      if (fs.existsSync(f) && /^\s*["']use client["']/m.test(fs.readFileSync(f, "utf8").slice(0, 300))) return true;
    }
  }
  return false;
}

if (problems.length) {
  console.error(`FSD check failed (${problems.length}):`);
  for (const p of problems) console.error("  " + p);
  console.error("See README.md > Project structure.");
  process.exit(1);
}
console.log(`FSD check passed (${files.length} files).`);
