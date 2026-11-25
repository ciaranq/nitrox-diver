// Serve dist/ locally (no dependencies). Run `bun run dev`, then open http://localhost:3000
import { join, normalize } from "node:path";

const dist = join(import.meta.dir, "..", "dist");
const port = Number(process.env.PORT ?? 3000);

Bun.serve({
  port,
  async fetch(req) {
    const path = normalize(decodeURIComponent(new URL(req.url).pathname)).replace(/^(\.\.[/\\])+/, "");
    const file = Bun.file(join(dist, path === "/" ? "index.html" : path));
    return (await file.exists()) ? new Response(file) : new Response("Not found", { status: 404 });
  },
});
console.log(`Serving dist/ at http://localhost:${port}`);
