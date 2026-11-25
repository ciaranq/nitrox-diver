# Feature: Nitrox study course

## Purpose

A metric, agency-neutral course that prepares the owner for any agency's entry-level nitrox exam and practical.

## Scope

- 9 modules, each a reading and a quiz: basics, physics, oxygen, MOD and best mix, EAD and planning, equipment, analysis, emergencies, agencies.
- Formula sheet and calculator: PO₂, MOD, contingency depth, best mix, EAD and CNS%.
- Generated calculation drills, and a final exam of 20 or 40 questions with a score by topic.
- Out of scope: accounts, synced progress, real dive planning.

## Inputs and outputs

- Inputs: answer clicks, and the calculator fields (O₂ %, depth, PO₂ limit, time).
- Outputs: feedback, scores, and progress saved in `localStorage` (per browser, no server).

## User flow

Home → Module N reading → quiz (80% passes) → next module → drills → final exam (aim for 90%).

## Dependencies

None at runtime except Google Fonts, with system fallbacks.

## Sources

`certifiers/`: `tdi/` (TDI Standards v0126), `raid/`, `dan/` (DAN Nitrox Workshop 2000), `SSI/` transcript, `naui/` notes, plus the existing `syllabus/`. `padi/` is not merged yet.

## Risks

- Agency details from secondary sources (SSI levels, NAUI). These are flagged in Module 9.
- Agencies differ on convulsion procedure. Both views are presented.

## Issues

- Vercel readiness: issue pending until the GitHub repo exists (branch `chore/vercel-ready`).
