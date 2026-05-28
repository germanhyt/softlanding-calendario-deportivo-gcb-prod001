export type PublicSlide = {
	orden: number;
	url: string;
	alt: string;
};

export type PublicProgramacion = {
	modo?: string | null;
	titulo?: string | null;
	fecha_inicio?: string | null;
	fecha_fin?: string | null;
	slides: PublicSlide[];
};

export type PublicTrack = {
	orden: number;
	title: string;
	url: string;
};

export type PublicMusica = {
	playlistEnabled: boolean;
	tracks: PublicTrack[];
};

export function getApiBase(): string {
	const fromEnv = import.meta.env.PUBLIC_REFUGIO_API_URL;
	if (fromEnv && typeof fromEnv === 'string') {
		return fromEnv.replace(/\/$/, '');
	}
	if (typeof window !== 'undefined') {
		return `http://${window.location.hostname}:8080/api`;
	}
	return 'http://localhost:8080/api';
}

export function getPollIntervalMs(): number {
	const raw = import.meta.env.PUBLIC_AGENDA_POLL_MS;
	const parsed = raw ? Number(raw) : 300_000;
	if (!Number.isFinite(parsed) || parsed < 30_000) return 300_000;
	return parsed;
}

export async function fetchProgramacion(apiBase = getApiBase()): Promise<PublicProgramacion> {
	const res = await fetch(`${apiBase}/agenda-deportiva/public/programacion`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		throw new Error(`programacion HTTP ${res.status}`);
	}
	return res.json() as Promise<PublicProgramacion>;
}

export async function fetchMusica(apiBase = getApiBase()): Promise<PublicMusica> {
	const res = await fetch(`${apiBase}/agenda-deportiva/public/musica`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		throw new Error(`musica HTTP ${res.status}`);
	}
	return res.json() as Promise<PublicMusica>;
}

export function slidesSignature(slides: PublicSlide[]): string {
	return slides.map((s) => `${s.orden}:${s.url}`).join('|');
}

export function tracksSignature(data: PublicMusica): string {
	if (!data.playlistEnabled) return 'off';
	return data.tracks.map((t) => `${t.orden}:${t.url}`).join('|');
}
