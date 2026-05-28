import { c as createComponent } from './astro-component_MlBLjEmX.mjs';
import 'piccolore';
import { a5 as addAttribute, b5 as renderHead, b6 as renderSlot, b9 as renderTemplate, aW as maybeRenderHead, ap as defineScriptVars, m as Fragment } from './params-and-props_Dfs_IhfH.mjs';
import { r as renderComponent } from './entrypoint_DaSwFLDo.mjs';
import 'clsx';
import { r as renderScript } from './script_Cgy03sdu.mjs';
import { g as getActiveSlides, a as getMusic } from './data_CzO3YLy5.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Catelera Deportiva | Refugio Gastronómico",
    description = "Encuentros deportivos de la semana en Refugio Gastronómico"
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#0a1209"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/layouts/Layout.astro", void 0);

const $$SportsCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SportsCarousel;
  const { slides } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="carousel" aria-label="Catelera deportiva semanal" data-astro-cid-mqth7kw2> <button type="button" class="carousel-mode-toggle" aria-label="Cambiar entre modo kiosk y modo celular" aria-pressed="false" data-astro-cid-mqth7kw2> <span class="carousel-mode-toggle__track" data-astro-cid-mqth7kw2> <span class="carousel-mode-toggle__thumb" data-astro-cid-mqth7kw2></span> </span> </button> <div class="swiper sports-swiper" data-astro-cid-mqth7kw2> <div class="swiper-wrapper" data-astro-cid-mqth7kw2> ${slides.map((slide, index) => renderTemplate`<div class="swiper-slide" data-astro-cid-mqth7kw2> <img${addAttribute(slide.src, "src")}${addAttribute(slide.alt, "alt")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} data-astro-cid-mqth7kw2> </div>`)} </div> <button type="button" class="swiper-button-prev" aria-label="Slide anterior" data-astro-cid-mqth7kw2></button> <button type="button" class="swiper-button-next" aria-label="Slide siguiente" data-astro-cid-mqth7kw2></button> <div class="swiper-pagination" data-astro-cid-mqth7kw2></div> </div> <p class="carousel-hint" aria-hidden="true" data-astro-cid-mqth7kw2> <span class="carousel-hint__chevrons" data-astro-cid-mqth7kw2>›››</span>
Desliza o usa las flechas
</p> </section> ${renderScript($$result, "C:/Users/gcbso/Downloads/catelera-deportiva/src/components/SportsCarousel.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/components/SportsCarousel.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MusicPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MusicPlayer;
  const { playlistEnabled, tracks } = Astro2.props;
  const hasTracks = playlistEnabled && tracks.length > 0;
  const tracksJson = JSON.stringify(tracks);
  return renderTemplate(_a || (_a = __template(["", "<script>(function(){", "\n	const SOUND_KEY = 'catelera-sound';\n	const tracks = JSON.parse(tracksJson);\n\n	const toggle = document.querySelector('.sound-toggle');\n	const audio = document.getElementById('bg-audio');\n\n	if (!toggle || !audio || !tracks?.length) {\n		// Sin pistas configuradas\n	} else {\n		let trackIndex = 0;\n		let enabled = getSoundPreference();\n		let isPlaying = false;\n\n		audio.volume = 0.75;\n\n		function getSoundPreference() {\n			const stored = localStorage.getItem(SOUND_KEY);\n			if (stored === 'true') return true;\n			if (stored === 'false') return false;\n			return playlistEnabled;\n		}\n\n		function setToggleState(active) {\n			toggle.setAttribute('aria-pressed', String(active));\n			toggle.classList.toggle('is-active', active);\n		}\n\n		function waitForAudioReady() {\n			if (audio.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {\n				return Promise.resolve();\n			}\n\n			return new Promise((resolve, reject) => {\n				const onReady = () => cleanup(resolve);\n				const onError = () => cleanup(() => reject(new Error('No se pudo cargar el audio')));\n\n				const cleanup = (next) => {\n					audio.removeEventListener('canplaythrough', onReady);\n					audio.removeEventListener('error', onError);\n					next();\n				};\n\n				audio.addEventListener('canplaythrough', onReady);\n				audio.addEventListener('error', onError);\n			});\n		}\n\n		async function playCurrentTrack() {\n			const track = tracks[trackIndex];\n			if (!track?.src) return false;\n\n			const nextSrc = new URL(track.src, window.location.origin).href;\n			if (audio.src !== nextSrc) {\n				audio.src = track.src;\n				audio.load();\n			}\n\n			await waitForAudioReady();\n			await audio.play();\n			isPlaying = true;\n			return true;\n		}\n\n		async function startSound() {\n			try {\n				await playCurrentTrack();\n				enabled = true;\n				localStorage.setItem(SOUND_KEY, 'true');\n				setToggleState(true);\n			} catch {\n				isPlaying = false;\n				enabled = false;\n				localStorage.setItem(SOUND_KEY, 'false');\n				setToggleState(false);\n			}\n		}\n\n		function stopSound() {\n			enabled = false;\n			isPlaying = false;\n			localStorage.setItem(SOUND_KEY, 'false');\n			setToggleState(false);\n			audio.pause();\n		}\n\n		audio.addEventListener('ended', () => {\n			if (!enabled) return;\n			trackIndex = (trackIndex + 1) % tracks.length;\n			playCurrentTrack().catch(stopSound);\n		});\n\n		toggle.addEventListener('click', () => {\n			if (enabled && isPlaying) {\n				stopSound();\n			} else {\n				startSound();\n			}\n		});\n\n		// Primer toque en pantalla (kiosk / móvil) si el autoplay fue bloqueado\n		const unlockOnGesture = () => {\n			if (enabled && !isPlaying) {\n				startSound();\n			}\n			document.removeEventListener('pointerdown', unlockOnGesture);\n		};\n		document.addEventListener('pointerdown', unlockOnGesture);\n\n		setToggleState(enabled);\n		if (enabled) {\n			startSound();\n		}\n	}\n})();<\/script>"])), hasTracks && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-nuxxkkcb": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<button type="button" class="sound-toggle" aria-label="Activar o desactivar música de fondo" aria-pressed="false" data-astro-cid-nuxxkkcb><span class="sound-toggle__icon sound-toggle__icon--off" data-astro-cid-nuxxkkcb>🔇</span><span class="sound-toggle__icon sound-toggle__icon--on" data-astro-cid-nuxxkkcb>🔊</span></button><audio id="bg-audio" preload="auto" playsinline data-astro-cid-nuxxkkcb></audio>` })}`, defineScriptVars({ tracksJson, playlistEnabled }));
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/components/MusicPlayer.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const slides = await getActiveSlides();
  const music = await getMusic();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SportsCarousel", $$SportsCarousel, { "slides": slides })} ${renderComponent($$result2, "MusicPlayer", $$MusicPlayer, { "playlistEnabled": music.playlistEnabled, "tracks": music.tracks })} ` })}`;
}, "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/index.astro", void 0);

const $$file = "C:/Users/gcbso/Downloads/catelera-deportiva/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
