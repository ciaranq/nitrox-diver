# HANDOFF — nitrox-training

Chronological cross-agent log. Newest entry at the bottom.
**Every agent appends before ending a session.**

**Requirements:** `REQUIREMENTS.md` · **Tasks:** `TASK_LIST.md`

---

## Agent Roles

| Agent | Role | Owns |
|-------|------|------|
| Claude (CLI) | Architect + executor | `CLAUDE.md`, design, review |
| Codex | Executor | `AGENTS.md` |
| Antigravity (AGY) | Execution + browser verification | terminal, UI checks |
| Gemini | Heavy context + multimodal | spec ingestion, drafting |

Lane rule: do not edit another agent's instruction files without being asked.

---

## Architecture Decisions

| ID | Decision | Rationale |
|----|----------|-----------|
| A1 | Repo-native Markdown syllabus + practice exam + interactive coaching first (no Next.js/Neon build gate) | Owner's immediate goal is passing Nitrox certification as cheaply and fast as possible |
| A2 | ISO 11107 metric-first curriculum (`bar`, `metres`) covering PADI, RAID, SSI, SDI, and BSAC variations | Ensures owner passes whichever Sydney agency/shop is cheapest |

---

## Log

### 2026-11-23 — Gemini — Repo initialization & spec review

**Trigger:** User requested starting `nitrox-training` from chat handoff snippet.

**Completed:** Initialized git (`main` -> `ciaranq/nitrox-training.git`) and wrote initial `project_planning/` docs.

---

### 2026-11-23 — Gemini — Pivot to cheapest Nitrox certification & full syllabus

**Trigger:** Owner clarified the repo's primary aim is earning a Nitrox card as cheaply as possible via a full syllabus, interactive testing, and exam prep, and asked where the ~$150–$180 RAID deal is in Sydney and whether the RAID syllabus can be downloaded.

**Completed:**
- Verified via web search that the ~$150–$180 AUD RAID listing (`liveisdive.com`) is Perth Diving Academy (WA), not Sydney; documented actual Sydney cheapest options in `cheapest-path-sydney.md` (Pro Dive Sydney PADI dry ~$199 AUD, Bondi AOW bundle ~$195 AUD, SSI/SDI ~$199–$265 AUD, RAID free theory at `diveraid.com` + checking NSW RAID instructors, BSAC SSAC dues caveat).
- Clarified that RAID's official manual is behind free login at `diveraid.com` FREe-Learning, and authored a full 5-module ISO 11107 Nitrox syllabus (`syllabus/01`–`05`) plus `quizzes/mock-exam.md` directly in the repo.
- Updated `project_planning/REQUIREMENTS.md`, `TASK_LIST.md`, and `HANDOFF.md`.

**Decisions:** Deliver repo-native syllabus, Sydney cost guide, and exam prep immediately so quizzing can start right away.

**Blocked on:** Owner choosing Sydney provider (`D1`) and starting interactive quizzes.

**Next action:** Start interactive knowledge testing with the owner on Module 1 (or let them pick a module/mock exam).

---

### 2026-11-23 — Gemini — Ingested official RAID Nitrox PDFs

**Trigger:** Owner added `EN_nitrox_diver_open_water_training_202504.pdf` (15 pages) and `EN_nitrox_management_202607.pdf` (43 pages) to `raid/`.

**Completed:**
- Read both official RAID Nitrox manuals end-to-end.
- Merged RAID-specific rules and terminology into `syllabus/02`–`05`, `quizzes/mock-exam.md` (added Part C: RAID-Specific Exam Traps), and `cheapest-path-sydney.md` (added official Google Play / App Store `RAID Analyser` links and confirmed OW dives are explicitly optional).
- Key deltas captured: **TOD ($1.4\text{ bar}$) vs MOD ($1.6\text{ bar}$)** terminology, T Formula, never rounding UP computer $O_2\%$ (`32.8% -> 32%`), exceeding $1.6\text{ bar}$ = 100% CNS + 24h dry, permanent marker vs no grease pencil, Viton vs Buna-N O-rings, no silicone grease, Table 1B OTU limits, BRAID check, and RAID base-cert depth caps.

**Blocked on:** Owner answering Module 1 Q1 (or selecting an agency/shop in `cheapest-path-sydney.md`).

**Next action:** Quiz owner interactively through Modules 1–5 and `quizzes/mock-exam.md`.

### 2026-11-25 — Claude — Interactive course + Vercel readiness

**Completed:**
- Sorted downloads: TDI PDFs `naui/` → `tdi/`; `smithsonian/` → `dan/` (DAN Nitrox Workshop 2000). Owner then moved all agency folders under `certifiers/`.
- Built `course/` — 9-module metric study course (readings + quizzes), calculator, generated drills, final exam; published as a private claude.ai artifact.
- Vercel readiness on branch `chore/vercel-ready`: maths/content split into `course/nitrox-math.js` + `course/content.js`; Bun-only preflight (`scripts/lint.ts`, `tests/`, `scripts/build.ts` → `dist/`); `.githooks/pre-push`; `.github/workflows/preflight.yml` with Preflight log; `vercel.json`; `CLAUDE.md`, `AGENTS.md`, `.gitignore`, `docs/`.
- Decision D-001 (static + Bun built-ins) resolves REQUIREMENTS D2.

**Open:** GitHub repo `ciaranq/nitrox-training` does not exist yet, so no issue/PR. PADI Instructor Guide (`padi/`) not yet merged into course content.
