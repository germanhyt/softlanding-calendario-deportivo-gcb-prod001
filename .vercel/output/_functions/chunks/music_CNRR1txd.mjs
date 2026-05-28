import { a as getMusic, s as saveMusic } from './data_CzO3YLy5.mjs';

const GET = async () => {
  const music = await getMusic();
  return new Response(JSON.stringify(music), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const PUT = async ({ request }) => {
  const body = await request.json();
  if (!body || !Array.isArray(body.tracks)) {
    return new Response(JSON.stringify({ error: "Datos inválidos" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  await saveMusic({
    playlistEnabled: Boolean(body.playlistEnabled),
    tracks: body.tracks
  });
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
