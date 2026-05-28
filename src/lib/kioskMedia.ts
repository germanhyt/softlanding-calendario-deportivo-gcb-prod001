/** Espera a que el elemento tenga datos suficientes para reproducir. */
export function waitForAudioReady(
	audio: HTMLAudioElement,
	timeoutMs = 20_000,
): Promise<boolean> {
	if (audio.error) return Promise.resolve(false);
	if (audio.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
		return Promise.resolve(true);
	}

	return new Promise((resolve) => {
		let settled = false;

		const finish = (ok: boolean) => {
			if (settled) return;
			settled = true;
			clearTimeout(timer);
			audio.removeEventListener('canplaythrough', onReady);
			audio.removeEventListener('canplay', onReady);
			audio.removeEventListener('loadeddata', onReady);
			audio.removeEventListener('error', onError);
			resolve(ok);
		};

		const onReady = () => finish(true);
		const onError = () => finish(false);
		const timer = setTimeout(() => {
			finish(audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA);
		}, timeoutMs);

		audio.addEventListener('canplaythrough', onReady, { once: true });
		audio.addEventListener('canplay', onReady, { once: true });
		audio.addEventListener('loadeddata', onReady, { once: true });
		audio.addEventListener('error', onError, { once: true });
	});
}

/** Autoplay de audio en cartelera / kiosk: intenta con sonido y cae a muted→unmute. */
export async function playAudioDirect(audio: HTMLAudioElement): Promise<boolean> {
	audio.volume = 1;

	const ready = await waitForAudioReady(audio);
	if (!ready) return false;

	try {
		audio.muted = false;
		await audio.play();
		return !audio.paused;
	} catch {
		/* autoplay con sonido bloqueado */
	}

	try {
		audio.muted = true;
		await audio.play();
		if (audio.paused) return false;
		audio.muted = false;
		return true;
	} catch {
		return false;
	}
}

let unlockCleanup: (() => void) | null = null;

export function bindMediaUnlock(onUnlock: () => void): void {
	unbindMediaUnlock();

	const unlock = () => {
		onUnlock();
	};

	document.addEventListener('pointerdown', unlock);
	document.addEventListener('keydown', unlock);
	document.addEventListener('touchstart', unlock, { passive: true });

	unlockCleanup = () => {
		document.removeEventListener('pointerdown', unlock);
		document.removeEventListener('keydown', unlock);
		document.removeEventListener('touchstart', unlock);
		unlockCleanup = null;
	};
}

export function unbindMediaUnlock(): void {
	unlockCleanup?.();
}
