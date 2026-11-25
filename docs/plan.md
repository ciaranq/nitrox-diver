# Plan

## Current scope

Get the owner Nitrox certified at the cheapest valid price (see `project_planning/REQUIREMENTS.md`), with an interactive study course they can use on any device.

## Milestones

| # | Milestone | Status |
|---|---|---|
| M1 | Markdown syllabus, mock exam, Sydney cost guide | Done |
| M2 | Interactive metric course (`course/`), published as a claude.ai artifact | Done |
| M3 | Vercel-ready: preflight, CI, docs, `vercel.json` | In review on `chore/vercel-ready` |
| M4 | First Vercel deploy and post-deploy check | Next. Blocked on the GitHub repo existing. |
| M5 | Add PADI Instructor Guide content to the course | Backlog |

## Next delivery slice

1. Owner creates the `ciaranq/nitrox-training` GitHub repo, then opens the issue for M3 and renames the branch to `chore/<N>-vercel-ready`.
2. Merge M3, connect the repo to Vercel, and run the post-deploy check in `docs/runbook.md`.
