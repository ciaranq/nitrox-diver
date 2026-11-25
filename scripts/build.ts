// Build the deployable static site into dist/ (Vercel output directory).
// The source page is artifact format (no doctype/head), so the build wraps it in a full document.
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const src = join(root, "course");
const out = join(root, "dist");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const page = readFileSync(join(src, "nitrox-course.html"), "utf8");
const head = [
  "<!doctype html>",
  '<html lang="en">',
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 32%22%3E%3Crect width=%2216%22 height=%2232%22 rx=%227%22 fill=%22%23f2c230%22/%3E%3Crect y=%229%22 width=%2216%22 height=%226%22 fill=%22%23178f4c%22/%3E%3C/svg%3E">',
  "<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>",
].join("\n");
writeFileSync(join(out, "index.html"), head + "\n" + page);
for (const f of ["nitrox-math.js", "content.js"]) copyFileSync(join(src, f), join(out, f));

// Smoke check the output so a broken build can't pass silently.
const built = readFileSync(join(out, "index.html"), "utf8");
for (const needle of ["<!doctype html>", "<title>Nitrox Study Course</title>", 'src="nitrox-math.js"', 'src="content.js"']) {
  if (!built.includes(needle)) { console.error(`build: dist/index.html missing ${needle}`); process.exit(1); }
}
console.log("build: dist/ ready (index.html, nitrox-math.js, content.js)");
