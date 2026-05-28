import { mkdir, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';

const POST = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("file");
  const folder = String(formData.get("folder") ?? "slides");
  if (!(file instanceof File) || !file.size) {
    return new Response(JSON.stringify({ error: "Archivo requerido" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const allowedFolders = ["slides", "music"];
  if (!allowedFolders.includes(folder)) {
    return new Response(JSON.stringify({ error: "Carpeta no permitida" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  const uploadDir = nodePath.join(process.cwd(), "public", "uploads", folder);
  await mkdir(uploadDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${safeName}`;
  await writeFile(nodePath.join(uploadDir, filename), buffer);
  return new Response(
    JSON.stringify({
      ok: true,
      src: `/uploads/${folder}/${filename}`,
      filename
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
