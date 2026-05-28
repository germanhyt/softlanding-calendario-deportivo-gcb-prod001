export type CarouselSlide = {
	src: string;
	alt: string;
};

/** Contingencia si la API no responde o no hay programación activa. */
export const FALLBACK_SLIDES: CarouselSlide[] = [
	{ src: '/slides/01-agenda-deportiva.png', alt: 'Agenda Deportiva — 25 al 31 de Mayo' },
	{ src: '/slides/02-pasion-deporte.png', alt: 'La pasión del deporte se vive aquí — Refugio Gastronómico' },
	{ src: '/slides/03-futbol-internacional.png', alt: 'Fútbol Internacional — Partidos destacados' },
	{ src: '/slides/04-futbol-peruano.png', alt: 'Fútbol Peruano — Partidos destacados' },
	{ src: '/slides/05-voley-peruano.png', alt: 'Vóley Peruano — Partidos destacados' },
	{ src: '/slides/06-ufc.png', alt: 'UFC — Peleas destacadas' },
];
