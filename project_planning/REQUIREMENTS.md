# REQUIREMENTS — nitrox-training

**Flow:** Full (AI-SDLC) · **Created:** 2026-11-23 · **Updated:** 2026-11-23 · **Repo:** `https://github.com/ciaranq/nitrox-training.git` (private)

Repo-level scope and constraints. Individual features get their own `specs/<feature>/requirements.md` — this file is about the project, not a feature.

---

## Problem Statement

Getting an Enriched Air Nitrox certification card in Sydney can cost anywhere from ~$199 AUD to $395+ AUD depending on agency, eLearning bundles, and whether optional ocean dives are included. The goal of this repository is to get the owner **Nitrox-certified in the cheapest valid way possible** (comparing PADI, SSI, SDI, RAID, and BSAC in Sydney) by housing a complete agency-agnostic Nitrox syllabus, interactive knowledge checks, formula drills, and exam prep so the owner walks into the practical/exam ready to pass on the first attempt.

## Goals

| # | Goal | Verifiable by |
|---|------|---------------|
| G1 | Identify and track the cheapest valid path to a Nitrox card in Sydney (comparing dry eLearning+practical vs bundled vs club routes) | `cheapest-path-sydney.md` documents verified local options, hidden fees (e.g. Perth vs Sydney RAID availability, BSAC membership dues), and booking checklist |
| G2 | Provide a complete ISO 11107-aligned Nitrox syllabus covering PADI, RAID, SSI, SDI, and BSAC exam topics | `syllabus/01`–`05` cover physics, Dalton's Law, MOD, EAD, Best Mix, CNS/OTU toxicity, equipment (>40% vs <=40%), gas analysis, computer setup, and O2 emergencies |
| G3 | Test the owner's knowledge interactively and prepare them for the certification exam | `quizzes/mock-exam.md` plus interactive chat/CLI quizzing covers all exam objectives and math drills until 90%+ readiness |
| G4 | *(Optional Phase 2)* Add a Bun/TypeScript CLI drill runner or web trainer if automated timed drills are needed | Tracked in `TASK_LIST.md` Backlog / Ready |

## Non-Goals

- Replacing an accredited dive agency's practical oxygen-analyzer sign-off and e-card issuance — this repo prepares you to pass the theory/exam and complete the cheapest legitimate practical sign-off.
- Providing medical diving fitness advice or decompression table replacement for dive computers.
- Building a heavy multi-user club portal or Neon Postgres backend before certification is completed.

## Technical Boundaries

- **Primary deliverables:** Structured Markdown syllabus (`syllabus/`), Sydney cost & booking guide (`cheapest-path-sydney.md`), practice exam & math drills (`quizzes/`), and interactive coaching in chat.
- **Optional tooling (if code is added):** TypeScript + Bun (`bun` only, never npm/yarn/pnpm) + Vitest for formula verification.
- **Units & Standards:** Metric (`metres`, `bar`), ISO 11107 recreational Nitrox (`22%–40%` $O_2$), `1.4 bar` max working $PpO_2$ and `1.6 bar` max contingency $PpO_2$.
- **Private repository:** `ciaranq/nitrox-training`

## Acceptance Criteria

- [x] `cheapest-path-sydney.md` compares PADI, SSI, SDI, RAID, and BSAC costs and clarifies Perth vs Sydney availability
- [x] Complete 5-module Nitrox syllabus written in `syllabus/`
- [x] Full practice exam + formula drills written in `quizzes/mock-exam.md`
- [ ] Owner scores >= 90% on mock exam and completes agency eLearning + Sydney practical gas-analysis sign-off to earn Nitrox card

## Open Decisions

| ID | Decision | Blocks | Status |
|----|----------|--------|--------|
| D1 | Which Sydney provider to book for the dry practical sign-off (Pro Dive Sydney ~$199 PADI dry vs SSI/SDI shop vs independent NSW RAID instructor vs AOW bundle) | Final agency-specific exam focus & booking | Open |
| D2 | Whether to add a Bun CLI quiz/formula simulator script or keep all quizzing interactive in chat + Markdown | Optional Phase 2 code scaffold | Open |

## Risks

| Risk | Mitigation |
|------|------------|
| Confusing out-of-state RAID pricing (~$150–$180 in Perth) with Sydney retail availability | Explicitly verify local Sydney shop pricing before booking; track Sydney dry PADI/SSI (~$199+) alongside independent NSW RAID options |
| Agency-specific wording differences on final exams (PADI vs RAID vs BSAC) | Syllabus flags agency variations explicitly (e.g. metric vs imperial, CNS limits, 1.4/1.6 bar rules, rounding conventions) |
| Hidden costs (mandatory dives, gear rental, club dues) | Booking checklist verifies "dry certification / no ocean dives required" and total out-of-pocket AUD before paying |

## Review log

1. Q: Who is the primary user of nitrox-training, and how should data be persisted? A: Personal tracker & planner. Affects: Goals, Non-Goals.
2. Q: Which core capabilities belong in the initial MVP scope? A: *(Superseded by #8)* Originally all 3 pillars (BSAC tracker, Nitrox math, Sydney site planner).
3. Q: Which stack architecture and database should we standardize on? A: *(Superseded by #8)* Originally Next.js 16 + Neon + NextAuth v5.
4. Q: Which BSAC training progression and Nitrox rules should be built into the tracker? A: *(Superseded by #8)* Originally BSAC Sports Diver/Dive Leader + Nitrox.
5. Q: How should Sydney dive site conditions and tide/swell forecasts be sourced? A: *(Superseded by #8)* Originally Open-Meteo Marine.
6. Q: How should we initialize the local git repo and GitHub remote in /Users/Shared/GIT/nitrox-course? A: Init git in this folder + wire origin to `ciaranq/nitrox-training.git`. Affects: Header metadata.
7. Q: How should we execute this repo initialization? A: Native execution. Affects: Execution scope.
8. Q: Scope pivot from owner: Goal is becoming Nitrox-certified in the cheapest way possible (PADI, BSAC, RAID, SSI, SDI) via a full Nitrox syllabus, interactive knowledge testing, and exam prep in this repo. A: Confirmed pivot — rewrote `REQUIREMENTS.md`, `TASK_LIST.md`, and `HANDOFF.md` to prioritize cheapest-path Sydney guide, complete ISO 11107 Nitrox syllabus, and exam prep/quizzing. Affects: All sections.
