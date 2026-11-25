# nitrox-course

Get Nitrox certified the cheapest valid way in Sydney. The repo holds source material, a Markdown syllabus, and a static web study course in `course/`, deployed to Vercel.

**Flow:** Full (AI-SDLC). See `_intelliagent-standards/docs/operations/flows.md`.

## Project Overview

- `course/`: the interactive study course (9 modules, quizzes, drills, final exam, calculator). Static HTML and JS, no framework.
- `syllabus/`, `quizzes/`: Markdown study notes and the mock exam.
- `certifiers/<agency>/` (raid, tdi, padi, dan, SSI, naui, bsac, cmas): source material sorted by agency. Read only.
- `project_planning/`: REQUIREMENTS, TASK_LIST, HANDOFF. `docs/`: plan, decisions, runbook, features.

## Tech Stack

Differs from the global default: **no Next.js, no dependencies.** It's a static site with Bun only for scripts and tests (`bun test`, `Bun.Transpiler`). See `docs/decisions.md` D-001.

## Setup Commands

```bash
bun install          # no deps; sets git hooksPath to .githooks
bun run dev          # build, then serve dist/ at http://localhost:3000
bun run lint         # script syntax, page contract, quiz content shape
bun run test         # formula and question-generator unit tests
bun run build        # writes dist/ (Vercel output)
bun run preflight    # lint -> test -> build. Same gate in the pre-push hook, CI and Vercel.
```

## Coding Conventions

- `course/nitrox-course.html` is the source page in **Artifact format**: no doctype, html, head or body tags. `scripts/build.ts` wraps it for Vercel.
- Scripts load in order: `nitrox-math.js` (pure maths and generators), then `content.js` (modules and quizzes), then the inline app.
- Quiz items are `{q, a: [correct, wrong, wrong, wrong], why}`. Options are shuffled at render time.
- Metric only: metres of seawater, bar, `Pabs = D/10 + 1`. Rounding: MOD down, best mix down, EAD up.
- Every fact needs a source in the module's sources line. Flag anything unverified rather than guessing.

## Boundaries

- Don't edit the source PDFs or transcripts.
- Don't add dependencies without approval.
- The course is study material, not dive planning. Keep the "for study only" notices.
- Republishing the claude.ai artifact means sending `nitrox-math.js` and `content.js` as `files`.

## Testing Instructions

Run `bun run preflight`. It must be 100% green before any push or deploy. When you change maths, add a test case in `tests/nitrox-math.test.ts`. When you add quiz questions, lint checks their shape.

## Git workflow

Solo-repo mode: one branch per task, the owner merges.

## Gotchas

- `git config core.hooksPath .githooks` is set by `bun install` (the `prepare` script). Run it manually on a fresh clone if hooks don't fire.
- `course/index.html` is an older hand-built copy. Vercel serves `dist/` from the build instead.
