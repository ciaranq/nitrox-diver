# Nitrox Study Course (static web app)

| File | Role |
|---|---|
| `nitrox-course.html` | Page source and UI, in Claude Artifact format (no doctype or head) |
| `nitrox-math.js` | Formulas and generated calculation questions (unit-tested) |
| `content.js` | The 9 modules: readings and quizzes (shape-checked by lint) |

From the repo root:

```sh
bun run dev        # build, then serve http://localhost:3000
bun run preflight  # lint -> test -> build into dist/
```

Vercel builds `dist/` using `vercel.json`. See `docs/runbook.md`. Progress is stored per browser in `localStorage`.
