import { c as createComponent } from './astro-component_MlBLjEmX.mjs';
import 'piccolore';
import { b5 as renderHead, b6 as renderSlot, b9 as renderTemplate } from './params-and-props_Dfs_IhfH.mjs';
import 'clsx';
import { r as renderScript } from './script_Cgy03sdu.mjs';

const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "Admin" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex, nofollow"><title>${title} | Catelera</title>${renderHead()}</head> <body> <div class="admin-shell"> <header class="admin-header"> <h1>Catelera Deportiva - Admin</h1> <nav class="admin-nav"> <a href="/admin">Inicio</a> <a href="/admin/slides">Imágenes</a> <a href="/admin/music">Música</a> <a href="/admin/credentials">Credenciales</a> <a href="/" target="_blank">Ver pantalla</a> <button type="button" id="logout-btn">Salir</button> </nav> </header> <main class="admin-main"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderScript($$result, "C:/Users/gcbso/Downloads/catelera-deportiva/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };
