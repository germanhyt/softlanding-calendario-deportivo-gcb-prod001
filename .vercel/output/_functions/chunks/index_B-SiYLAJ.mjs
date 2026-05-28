import { c as createComponent } from './astro-component_MlBLjEmX.mjs';
import 'piccolore';
import { b9 as renderTemplate, aW as maybeRenderHead } from './params-and-props_Dfs_IhfH.mjs';
import { r as renderComponent } from './entrypoint_DaSwFLDo.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CXSAsinS.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="admin-card"> <h2>Panel de marketing</h2> <p>Gestiona la cartelera deportiva en pocos pasos.</p> <div style="display: flex; flex-direction: column; gap: 1rem;"> <div class="admin-steps"> <span class="admin-step is-active">1. Login</span> <span class="admin-step is-active">2. Imágenes</span> <span class="admin-step is-active">3. Música</span> </div> <div class="admin-actions"> <a class="admin-btn" href="/admin/slides">Gestionar imágenes</a> <a class="admin-btn admin-btn--ghost" href="/admin/music">Gestionar música</a> <a class="admin-btn admin-btn--ghost" href="/admin/credentials">Credenciales</a> </div> </div> </section>  ` })}`;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
