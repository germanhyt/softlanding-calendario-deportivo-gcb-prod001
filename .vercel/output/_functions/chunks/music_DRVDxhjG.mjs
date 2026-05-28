import { c as createComponent } from './astro-component_MlBLjEmX.mjs';
import 'piccolore';
import { b9 as renderTemplate, aW as maybeRenderHead } from './params-and-props_Dfs_IhfH.mjs';
import { r as renderComponent } from './entrypoint_DaSwFLDo.mjs';
import { r as renderScript } from './script_Cgy03sdu.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CXSAsinS.mjs';

const $$Music = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Música" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="admin-card"> <h2>Playlist de fondo</h2> <p>Activa o desactiva la música en la pantalla pública y administra los archivos de audio.</p> <label class="admin-checkbox-row" for="playlist-enabled"> <input id="playlist-enabled" type="checkbox"> <span>Habilitar música de fondo en la pantalla pública</span> </label> </section> <section class="admin-card"> <h3>Pistas</h3> <p class="admin-list__hint">Arrastra desde ⋮⋮ para definir el orden de reproducción.</p> <div class="admin-list" id="tracks-list"></div> <form class="admin-grid" id="music-form" style="margin-top: 1rem"> <div class="admin-field"> <label for="track-file">Subir audio</label> <input id="track-file" name="file" type="file" accept="audio/*"> </div> <div class="admin-field"> <label for="track-title">Título</label> <input id="track-title" placeholder="Ej. Ambiente lounge"> </div> <div class="admin-actions"> <button class="admin-btn" type="submit">Agregar pista</button> <button class="admin-btn admin-btn--ghost" type="button" id="save-music-btn">Guardar cambios</button> </div> </form> <p class="admin-status hidden" id="music-status"></p> </section> ${renderScript($$result2, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/music.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/music.astro", void 0);

const $$file = "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/music.astro";
const $$url = "/admin/music";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Music,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
