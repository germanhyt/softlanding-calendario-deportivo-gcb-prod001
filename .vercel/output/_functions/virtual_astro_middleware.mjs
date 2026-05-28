import { ao as defineMiddleware, be as sequence } from './chunks/params-and-props_Dfs_IhfH.mjs';
import 'piccolore';
import 'clsx';
import { readFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { g as getSessionUser } from './chunks/auth_Ctul8ScG.mjs';

const MIME_TYPES = {
  mp3: "audio/mpeg",
  wav: "audio/wav",
  ogg: "audio/ogg",
  m4a: "audio/mp4",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp"
};
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (pathname.startsWith("/uploads/")) {
    const relativePath = pathname.replace("/uploads/", "");
    const uploadsRoot = nodePath.join(process.cwd(), "public", "uploads");
    const filePath = nodePath.resolve(uploadsRoot, relativePath);
    if (!filePath.startsWith(uploadsRoot)) {
      return new Response("Not found", { status: 404 });
    }
    try {
      const data = await readFile(filePath);
      const ext = nodePath.extname(filePath).slice(1).toLowerCase();
      return new Response(data, {
        status: 200,
        headers: {
          "Content-Type": MIME_TYPES[ext] ?? "application/octet-stream",
          "Cache-Control": "public, max-age=3600"
        }
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  }
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const user = getSessionUser(context.cookies);
    if (!user) {
      return context.redirect("/admin/login");
    }
  }
  if (pathname.startsWith("/api/admin") && !getSessionUser(context.cookies)) {
    return new Response(JSON.stringify({ error: "No autorizado" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
