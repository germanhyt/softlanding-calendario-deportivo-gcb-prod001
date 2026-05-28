/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_REFUGIO_API_URL?: string;
	readonly PUBLIC_AGENDA_POLL_MS?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
