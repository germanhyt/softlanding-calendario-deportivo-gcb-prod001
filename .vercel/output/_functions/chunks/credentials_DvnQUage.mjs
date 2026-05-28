import { a as getUser, u as updateCredentials, s as setSessionCookie } from './auth_Ctul8ScG.mjs';

const GET = async () => {
  const user = await getUser();
  return new Response(JSON.stringify({ username: user.username }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const PUT = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const updated = await updateCredentials({
      currentPassword: String(body.currentPassword ?? ""),
      newUsername: body.newUsername ? String(body.newUsername) : void 0,
      newPassword: body.newPassword ? String(body.newPassword) : void 0
    });
    setSessionCookie(cookies, updated.username);
    return new Response(JSON.stringify({ ok: true, username: updated.username }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo actualizar";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
