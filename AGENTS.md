# AGENTS.md — nitrox-course

## Project Overview

Nitrox certification prep. The deliverable is a static, metric, agency-neutral study course in `course/` (readings, quizzes, calculation drills, a final exam and a calculator), deployed to Vercel. Source material sits in `certifiers/<agency>/`. Markdown notes are in `syllabus/` and `quizzes/`. Flow: Full (AI-SDLC).

## Tech Stack

Static HTML and plain JS, with no framework and no dependencies. Bun runs the scripts and `bun test`. Deployed to Vercel from `dist/`. See `docs/decisions.md`.

## Setup Commands

```bash
bun install && bun run dev    # serve dist/ at http://localhost:3000
bun run preflight             # lint -> test -> build (required before push or deploy)
```

## Coding Conventions

- Source page: `course/nitrox-course.html`, in Artifact format (no doctype, head or body). The build adds the document wrapper.
- `course/nitrox-math.js` holds the pure maths and question generators. `course/content.js` holds the modules and quizzes.
- Quiz item shape: `{q, a: [correct, ...3 wrong], why}`.
- Metric units. MOD and best mix round down, EAD rounds up. Cite a source for every fact.

## Boundaries

No new dependencies without approval. Don't edit the source documents. Content is for study, not dive planning.

## Testing Instructions

`bun run preflight` must be fully green. Maths changes need a test in `tests/nitrox-math.test.ts`.
