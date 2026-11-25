// Lint for the static course: script syntax, page contract, and quiz content shape.
// Exits non-zero on any problem. Run with `bun run lint`.
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const course = join(root, "course");
const errors: string[] = [];
const fail = (msg: string) => errors.push(msg);

const transpiler = new Bun.Transpiler({ loader: "js" });
function syntax(label: string, code: string) {
  try { transpiler.transformSync(code); } catch (e) { fail(`${label}: syntax error: ${(e as Error).message}`); }
}

// 1. Script syntax
const html = readFileSync(join(course, "nitrox-course.html"), "utf8");
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
if (inline.length !== 1) fail(`nitrox-course.html: expected 1 inline <script>, found ${inline.length}`);
inline.forEach((code, i) => syntax(`nitrox-course.html inline script ${i + 1}`, code));
for (const f of ["nitrox-math.js", "content.js"]) syntax(f, readFileSync(join(course, f), "utf8"));

// 2. Page contract
if (!/^<title>[^<]{3,60}<\/title>/.test(html)) fail("nitrox-course.html must start with a short <title>");
if (/<!doctype|<html|<head>|<body/i.test(html)) fail("nitrox-course.html is artifact format: no doctype/html/head/body tags (build adds them)");
const mathAt = html.indexOf('<script src="nitrox-math.js">'), contentAt = html.indexOf('<script src="content.js">'), inlineAt = html.indexOf("<script>");
if (mathAt < 0 || contentAt < 0 || !(mathAt < contentAt && contentAt < inlineAt)) fail("scripts must load in order: nitrox-math.js, content.js, inline app");
for (const m of html.matchAll(/<script[^>]+src="(https?:[^"]+)"/g)) fail(`external script not allowed: ${m[1]}`);

// 3. Content shape
await import(join(course, "nitrox-math.js"));
await import(join(course, "content.js"));
const { MODULES } = (globalThis as any).NitroxContent;
if (!Array.isArray(MODULES) || MODULES.length !== 9) fail(`expected 9 modules, found ${MODULES?.length}`);
const ids = new Set<string>();
const questions = new Set<string>();
for (const m of MODULES ?? []) {
  if (!/^m\d$/.test(m.id) || ids.has(m.id)) fail(`module id invalid or duplicate: ${m.id}`);
  ids.add(m.id);
  for (const k of ["title", "short", "summary", "reading"]) if (typeof m[k] !== "string" || !m[k].trim()) fail(`${m.id}: missing ${k}`);
  if (!(m.mins > 0)) fail(`${m.id}: mins must be positive`);
  if (!m.reading.includes("class='src'")) fail(`${m.id}: reading must end with a sources line`);
  if (!Array.isArray(m.quiz) || m.quiz.length < 6) fail(`${m.id}: needs at least 6 quiz questions`);
  m.quiz.forEach((q: any, i: number) => {
    const at = `${m.id} Q${i + 1}`;
    if (typeof q.q !== "string" || !q.q.trim().endsWith("?")) fail(`${at}: question must be text ending in "?"`);
    if (questions.has(q.q)) fail(`${at}: duplicate question text`);
    questions.add(q.q);
    if (!Array.isArray(q.a) || q.a.length !== 4) fail(`${at}: needs exactly 4 options`);
    else if (new Set(q.a.map((s: string) => s.trim().toLowerCase())).size !== 4) fail(`${at}: options must be unique`);
    else if (q.a.some((s: unknown) => typeof s !== "string" || !s.trim())) fail(`${at}: empty option`);
    if (typeof q.why !== "string" || q.why.trim().length < 10) fail(`${at}: needs an explanation (why)`);
  });
}

if (errors.length) {
  console.error(`lint: ${errors.length} problem(s)\n` + errors.map((e) => "  ✗ " + e).join("\n"));
  process.exit(1);
}
console.log(`lint: ok (${MODULES.length} modules, ${questions.size} questions, 3 scripts)`);
