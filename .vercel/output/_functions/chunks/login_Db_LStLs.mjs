import { c as createComponent } from './astro-component_MlBLjEmX.mjs';
import 'piccolore';
import { b5 as renderHead, b9 as renderTemplate } from './params-and-props_Dfs_IhfH.mjs';
import 'clsx';
import { r as renderScript } from './script_Cgy03sdu.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex, nofollow"><title>Login | Catelera Admin</title>${renderHead()}</head> <body> <div class="admin-login"> <form class="admin-card" id="login-form"> <h2>Ingresar</h2> <p>Panel administrable sin base de datos.</p> <div class="admin-grid"> <div class="admin-field"> <label for="username">Usuario</label> <input id="username" name="username" autocomplete="username" required> </div> <div class="admin-field"> <label for="password">Contraseña</label> <input id="password" name="password" type="password" autocomplete="current-password" required> </div> </div> <div class="admin-actions"> <button class="admin-btn" type="submit">Entrar</button> </div> <p class="admin-status hidden" id="login-status"></p> </form> </div> ${renderScript($$result, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/login.astro", void 0);

const $$file = "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
