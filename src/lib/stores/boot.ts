import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const BOOT_KEY = 'aditya-site-booted';

function hasBooted(): boolean {
	if (!browser) return true;
	return sessionStorage.getItem(BOOT_KEY) === 'true';
}

export const bootComplete = writable(hasBooted());

export function markBooted() {
	if (browser) {
		sessionStorage.setItem(BOOT_KEY, 'true');
	}
	bootComplete.set(true);
}
