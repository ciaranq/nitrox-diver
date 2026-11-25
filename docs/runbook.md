# Runbook

## Deploy target

Vercel, static. Config is in `vercel.json`:

| Setting | Value |
|---|---|
| Framework | Other (`framework: null`) |
| Install | `bun install` (no dependencies) |
| Build | `bun run vercel-build`, which runs the full preflight |
| Output | `dist/` |
| Env vars | None |

## First deploy

1. Create the GitHub repo `ciaranq/nitrox-training` (private) and push `main`.
2. In Vercel, choose **Add New → Project**, import the repo, and keep Root Directory as `./`. `vercel.json` provides the rest.
3. Deploy a preview first, check it, then promote to production.

## Before every deploy

- `bun run preflight` is green locally.
- The CI **Preflight** workflow is green, and a comment has been added to the `Preflight log` issue.

## Post-deploy check

- The site loads at the deployment URL with no console errors.
- Home shows 9 module cards. Open Module 4 and answer one quiz question to see feedback.
- The Formulas calculator shows MOD 33 m for 32% at 1.4 bar.
- Drills give a new question. The final exam runs 20 questions to a score.

## Rollback

In the Vercel dashboard, go to **Deployments**, pick the previous good deployment and choose **Promote to Production**. Or run `vercel rollback`.

## Republishing the claude.ai artifact

Publish `course/nitrox-course.html` with `files` set to `nitrox-math.js` and `content.js`, both from `course/`, to the existing artifact URL.

## Deploy log

| Date | Target | Commit | Notes |
|---|---|---|---|
| | | | |
