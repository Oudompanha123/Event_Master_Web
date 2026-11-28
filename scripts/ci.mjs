#!/usr/bin/env node
// Local CI: the checks the Jenkins pipeline depends on, run before code leaves this machine.
//   node scripts/ci.mjs            lockfile, types, FSD rules, audit, production build
//   node scripts/ci.mjs --quick    skip the production build (about a minute faster)
//   node scripts/ci.mjs --docker   also build the Docker image, like the pipeline's Docker Build stage
// Runs automatically on `git push` (see .githooks/pre-push, enabled by `yarn install`).
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = new Set(process.argv.slice(2));
// Tools run as `node <their JS entry>`: no shell and no PATH lookup, so the same command works on
// Windows, macOS and Linux (on Windows a stray npm.cmd on PATH can otherwise break npm calls).
const node = (entry, ...rest) => [process.execPath, [entry, ...rest]];
const pkgBin = (...p) => path.join(root, "node_modules", ...p);
const npmCli = [
  process.env.npm_execpath,
  path.join(path.dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js"),
  path.join(path.dirname(process.execPath), "..", "lib", "node_modules", "npm", "bin", "npm-cli.js"),
].find((p) => p && p.endsWith("npm-cli.js") && fs.existsSync(p));
const npm = (...rest) => (npmCli ? node(npmCli, ...rest) : ["npm", rest]);

/** Resolves true if something is listening on localhost:port. */
const portInUse = (port) =>
  new Promise((resolve) => {
    const socket = net.connect({ port, host: "127.0.0.1" });
    socket.once("connect", () => { socket.destroy(); resolve(true); });
    socket.once("error", () => resolve(false));
  });

const steps = [
  {
    name: "Lockfile in sync",
    why: "Jenkins and the Dockerfile run `npm ci`, which fails if package-lock.json does not match package.json.",
    fix: "Run `npm install --package-lock-only --ignore-scripts` after changing dependencies, and commit package-lock.json.",
    cmd: npm("ci", "--dry-run", "--ignore-scripts", "--no-audit", "--no-fund"),
  },
  {
    name: "Type check",
    fix: "Fix the TypeScript errors above.",
    cmd: node(pkgBin("typescript", "bin", "tsc"), "--noEmit", "-p", ".", "--incremental", "false"),
  },
  {
    name: "FSD rules",
    fix: "See README.md > Project structure.",
    cmd: node("scripts/check-fsd.mjs"),
  },
  {
    name: "Security audit",
    why: "Fails on high or critical advisories in production dependencies.",
    fix: "Run `npm audit --omit=dev` for details; upgrade the package or pin a patched version in both `resolutions` (yarn) and `overrides` (npm).",
    cmd: npm("audit", "--omit=dev", "--audit-level=high"),
  },
  {
    name: "Production build",
    skip: () => args.has("--quick") && "--quick",
    before: async () => {
      // `next build` rewrites .next, which breaks a running `next dev`
      if (await portInUse(3000)) throw new Error("Something is running on port 3000 (probably `yarn dev`). Stop it, or use --quick.");
    },
    fix: "Fix the build error above. This is the same `next build` the Docker image runs.",
    cmd: node(pkgBin("next", "dist", "bin", "next"), "build"),
  },
  {
    name: "Docker image",
    why: "Same build as the pipeline's Docker Build stage, with the Dockerfile's ARGs taken from .env.",
    skip: () => !args.has("--docker") && "pass --docker to include",
    fix: "Is Docker Desktop running? Then fix the error above (Dockerfile).",
    // Jenkins passes the Dockerfile's ARGs (API_URL, NEXTAUTH_URL, ...) as --build-arg; without
    // them `next build` inside the image fails (e.g. "Invalid URL"). Only the names go on the
    // command line; Docker reads the values from the environment, so secrets stay out of logs.
    cmd: ["docker", ["build", ...dockerBuildArgNames().flatMap((n) => ["--build-arg", n]), "-t", "event-master-web:local-ci", "."]],
    env: dockerBuildArgEnv,
  },
];

/** ARG names declared in the Dockerfile. */
function dockerfileArgs() {
  const file = path.join(root, "Dockerfile");
  if (!fs.existsSync(file)) return [];
  return [...fs.readFileSync(file, "utf8").matchAll(/^\s*ARG\s+([A-Za-z_][A-Za-z0-9_]*)/gm)].map((m) => m[1]);
}

/** KEY=VALUE pairs from .env (the image build can't read it: .dockerignore excludes it). */
function readDotEnv() {
  const file = path.join(root, ".env");
  if (!fs.existsSync(file)) return {};
  const out = {};
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/.exec(line);
    if (m && !line.trimStart().startsWith("#")) out[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2");
  }
  return out;
}

/** Values for the Dockerfile's ARGs: the real environment wins, then .env. */
function dockerBuildArgEnv() {
  const dotenv = readDotEnv();
  const env = {};
  for (const name of dockerfileArgs()) {
    const value = process.env[name] ?? dotenv[name];
    if (value !== undefined) env[name] = value;
  }
  return env;
}

function dockerBuildArgNames() {
  const env = dockerBuildArgEnv();
  const missing = dockerfileArgs().filter((n) => !(n in env));
  if (missing.length && args.has("--docker")) console.warn(`  ! no value for Docker build arg(s): ${missing.join(", ")} (set them in .env)`);
  return Object.keys(env);
}

const results = [];
const started = Date.now();
for (const step of steps) {
  const skipped = step.skip?.();
  if (skipped) {
    results.push({ name: step.name, status: `skipped (${skipped})` });
    continue;
  }
  console.log(`\n▶ ${step.name}${step.why ? `  — ${step.why}` : ""}`);
  const t0 = Date.now();
  try {
    await step.before?.();
    const [cmd, cmdArgs] = step.cmd;
    // only the bare "npm" fallback needs a shell (npm is npm.cmd on Windows)
    const env = step.env ? { ...process.env, ...step.env() } : process.env;
    const r = spawnSync(cmd, cmdArgs, { cwd: root, stdio: "inherit", shell: cmd === "npm", env });
    if (r.status !== 0) throw new Error(`exited with code ${r.status ?? r.error?.message}`);
    results.push({ name: step.name, status: "passed", secs: (Date.now() - t0) / 1000 });
  } catch (err) {
    results.push({ name: step.name, status: "FAILED", secs: (Date.now() - t0) / 1000 });
    summary();
    console.error(`\n✖ ${step.name} failed: ${err.message}\n  ${step.fix}`);
    process.exit(1);
  }
}
summary();
console.log(`\n✔ Local CI passed in ${((Date.now() - started) / 1000).toFixed(0)}s`);

function summary() {
  console.log("\nLocal CI summary");
  for (const r of results) console.log(`  ${r.status.padEnd(28)} ${r.name}${r.secs ? `  (${r.secs.toFixed(1)}s)` : ""}`);
}
