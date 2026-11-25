# Decisions

## D-001 — Static site with Bun built-ins, not Next.js (2026-11-25)

**Decision:** The study course is a static HTML/JS site. Preflight uses only Bun built-ins: `bun test` for unit tests, a Bun lint script built on `Bun.Transpiler` plus content-shape checks, and a Bun build script that writes `dist/`. The hook is a plain `.githooks/pre-push`, not Husky.

**Why:** The course has no server, auth or data store, so a framework would add build weight and dependencies for no gain. The same file is also published as a claude.ai artifact, which needs plain HTML. With no dependencies there's nothing to audit or update. The owner chose this option.

**Rejected:**
- Next.js 16 app (the default stack): heavier than the problem, and harder to publish as an artifact.
- ESLint + Husky + Playwright (the standard toolchain): meets the standard to the letter but adds three dev dependencies. Revisit if the course grows key flows that need E2E tests.

**Deviation from standards:** no ESLint, no Husky, no Playwright. Lint and the hook are Bun equivalents.

Resolves `REQUIREMENTS.md` open decision D2 (web trainer vs chat-only quizzing).

## D-002 — Split maths and content out of the page (2026-11-25)

**Decision:** `course/nitrox-math.js` holds the formulas and generated questions, `course/content.js` holds the modules and quizzes, and the page keeps only UI.

**Why:** The maths needed unit tests and the quiz bank needed checking. Both files are plain scripts that set `globalThis`, so the page, the tests and the artifact all load them unchanged.
