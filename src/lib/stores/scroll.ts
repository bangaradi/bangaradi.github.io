import { writable, derived } from 'svelte/store';

export const scrollY = writable(0);
export const scrollHeight = writable(0);
export const clientHeight = writable(0);

export const scrollPercent = derived(
	[scrollY, scrollHeight, clientHeight],
	([$scrollY, $scrollHeight, $clientHeight]) => {
		const max = $scrollHeight - $clientHeight;
		if (max <= 0) return 'All';
		const pct = Math.round(($scrollY / max) * 100);
		if (pct <= 0) return 'Top';
		if (pct >= 100) return 'Bot';
		return `${pct}%`;
	}
);
