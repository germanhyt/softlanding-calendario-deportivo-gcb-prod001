import { a as getMusic } from './data_CzO3YLy5.mjs';

const GET = async () => {
  const music = await getMusic();
  return new Response(JSON.stringify(music), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
