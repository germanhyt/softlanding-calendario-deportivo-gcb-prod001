import { c as createComponent } from './astro-component_MlBLjEmX.mjs';
import 'piccolore';
import { b9 as renderTemplate, aW as maybeRenderHead } from './params-and-props_Dfs_IhfH.mjs';
import { r as renderComponent } from './entrypoint_DaSwFLDo.mjs';
import { r as renderScript } from './script_Cgy03sdu.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CXSAsinS.mjs';

const $$Slides = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Imágenes" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="admin-card"> <h2>Imágenes por semana o día</h2> <p>Paso 1: elige el modo. Paso 2: selecciona el periodo. Paso 3: carga y ordena imágenes.</p> <div class="admin-steps"> <span class="admin-step is-active" id="step-1">1. Modo</span> <span class="admin-step" id="step-2">2. Periodo</span> <span class="admin-step" id="step-3">3. Imágenes</span> </div> <div class="admin-grid"> <div class="admin-field"> <label for="view-mode">Modo de visualización</label> <select id="view-mode"> <option value="week">Por semana</option> <option value="day">Por día</option> </select> </div> </div> </section> <section class="admin-card" id="period-card"> <h3 id="period-title">Periodo activo</h3> <div class="admin-grid" id="week-fields"> <div class="admin-field"> <label for="week-select">Semana</label> <select id="week-select"></select> </div> <div class="admin-field"> <label for="week-label">Etiqueta</label> <input id="week-label" placeholder="25 al 31 de Mayo"> </div> <div class="admin-field"> <label for="week-start">Desde</label> <input id="week-start" type="date"> </div> <div class="admin-field"> <label for="week-end">Hasta</label> <input id="week-end" type="date"> </div> </div> <div class="admin-grid hidden" id="day-fields"> <div class="admin-field"> <label for="day-select">Día</label> <select id="day-select"></select> </div> <div class="admin-field"> <label for="day-label">Etiqueta</label> <input id="day-label" placeholder="Domingo 25"> </div> <div class="admin-field"> <label for="day-date">Fecha</label> <input id="day-date" type="date"> </div> </div> <div class="admin-actions"> <button class="admin-btn admin-btn--ghost" type="button" id="add-period-btn">Nuevo periodo</button> </div> </section> <section class="admin-card"> <h3>Lista de imágenes</h3> <p class="admin-list__hint">Arrastra desde el icono ⋮⋮ para cambiar el orden. El número indica la posición en pantalla.</p> <div class="admin-list" id="slides-list"></div> <form class="admin-grid" id="upload-form" style="margin-top: 1rem"> <div class="admin-field"> <label for="slide-file">Subir imagen</label> <input id="slide-file" name="file" type="file" accept="image/*"> </div> <div class="admin-field"> <label for="slide-alt">Descripción</label> <input id="slide-alt" placeholder="Ej. Fútbol Peruano"> </div> <div class="admin-actions"> <button class="admin-btn" type="submit">Agregar imagen</button> <button class="admin-btn admin-btn--ghost" type="button" id="save-btn">Guardar cambios</button> </div> </form> <p class="admin-status hidden" id="slides-status"></p> </section> ${renderScript($$result2, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/slides.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/slides.astro", void 0);

const $$file = "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/admin/slides.astro";
const $$url = "/admin/slides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Slides,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
