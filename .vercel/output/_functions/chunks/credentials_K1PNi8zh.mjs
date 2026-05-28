import { c as createComponent } from './astro-component_MlBLjEmX.mjs';
import 'piccolore';
import { b9 as renderTemplate, aW as maybeRenderHead } from './params-and-props_Dfs_IhfH.mjs';
import { r as renderComponent } from './entrypoint_DaSwFLDo.mjs';
import { r as renderScript } from './script_Cgy03sdu.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CXSAsinS.mjs';

const $$Credentials = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Credenciales" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="admin-card"> <h2>Actualizar credenciales</h2> <p>Cambia el usuario o la contraseña de acceso al panel. Se guarda en <code>data/users.json</code>.</p> <form class="admin-grid" id="credentials-form"> <div class="admin-field"> <label for="current-username">Usuario actual</label> <input id="current-username" readonly> </div> <div class="admin-field"> <label for="current-password">Contraseña actual</label> <input id="current-password" type="password" autocomplete="current-password" required> </div> <div class="admin-field"> <label for="new-username">Nuevo usuario</label> <input id="new-username" autocomplete="username" placeholder="Opcional"> </div> <div class="admin-field"> <label for="new-password">Nueva contraseña</label> <input id="new-password" type="password" autocomplete="new-password" placeholder="Opcional, mínimo 6 caracteres"> </div> <div class="admin-field"> <label for="confirm-password">Confirmar nueva contraseña</label> <input id="confirm-password" type="password" autocomplete="new-password" placeholder="Repite la nueva contraseña"> </div> <div class="admin-actions"> <button class="admin-btn" type="submit">Guardar credenciales</button> </div> </form> <p class="admin-status hidden" id="credentials-status"></p> </section> ` })} ${renderScript($$result, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/credentials.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/credentials.astro", void 0);

const $$file = "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/credentials.astro";
const $$url = "/admin/credentials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Credentials,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
