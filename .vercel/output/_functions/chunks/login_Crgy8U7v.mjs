import { v as verifyCredentials, s as setSessionCookie } from './auth_Ctul8ScG.mjs';

const POST = async ({ request, cookies }) => {
  const body = await request.json();
  const username = String(body.username ?? "").trim();
  const password = String(body.password ?? "");
  if (!username || !password) {
    return new Response(JSON.stringify({ error: "Credenciales requeridas" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const valid = await verifyCredentials(username, password);
  if (!valid) {
    return new Response(JSON.stringify({ error: "Usuario o contraseña incorrectos" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  setSessionCookie(cookies, username);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
