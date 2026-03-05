import { writable, derived } from 'svelte/store';

export const commandBarActive = writable(false);
export const commandInput = writable('');
export const commandMode = writable<':' | '/' | null>(null);

export interface NavItem {
	label: string;
	path: string;
	icon: string;
}

export const navItems: NavItem[] = [
	{ label: 'home', path: '/', icon: '~' },
	{ label: 'projects', path: '/projects', icon: '>' },
	{ label: 'blog', path: '/blog', icon: '#' },
	{ label: 'notes', path: '/notes', icon: '*' },
	{ label: 'movies', path: '/movies', icon: '@' },
	{ label: 'music', path: '/music', icon: '&' },
	{ label: 'type', path: '/type', icon: '%' },
	{ label: 'about', path: '/about', icon: '?' }
];

export const commands = [
	{ name: ':open', description: 'Open a page (fuzzy match)', usage: ':open <page>' },
	{ name: ':help', description: 'Show all commands', usage: ':help' },
	{ name: ':home', description: 'Go to home page', usage: ':home' },
	{ name: ':blog', description: 'Go to blog', usage: ':blog' },
	{ name: ':projects', description: 'Go to projects', usage: ':projects' },
	{ name: ':notes', description: 'Go to notes', usage: ':notes' },
	{ name: ':movies', description: 'Go to movie reviews', usage: ':movies' },
	{ name: ':music', description: 'Go to music gallery', usage: ':music' },
	{ name: ':type', description: 'Go to typing test', usage: ':type' },
	{ name: ':about', description: 'Go to about page', usage: ':about' },
	{ name: ':c', description: 'Click element by fuzzy text match', usage: ':c/<text>/' },
	{ name: ':scrollup', description: 'Scroll up', usage: ':scrollup' },
	{ name: ':scrolldown', description: 'Scroll down', usage: ':scrolldown' },
	{ name: ':top', description: 'Scroll to top', usage: ':top' },
	{ name: ':bottom', description: 'Scroll to bottom', usage: ':bottom' }
];

export const showHelp = writable(false);

export function fuzzyMatch(query: string, target: string): boolean {
	const q = query.toLowerCase();
	const t = target.toLowerCase();
	let qi = 0;
	for (let ti = 0; ti < t.length && qi < q.length; ti++) {
		if (t[ti] === q[qi]) qi++;
	}
	return qi === q.length;
}

export function fuzzyScore(query: string, target: string): number {
	const q = query.toLowerCase();
	const t = target.toLowerCase();
	let score = 0;
	let qi = 0;
	let lastMatch = -1;
	for (let ti = 0; ti < t.length && qi < q.length; ti++) {
		if (t[ti] === q[qi]) {
			score += 10;
			if (lastMatch === ti - 1) score += 5; // consecutive bonus
			if (ti === 0 || t[ti - 1] === ' ' || t[ti - 1] === '/') score += 3; // word start bonus
			lastMatch = ti;
			qi++;
		}
	}
	return qi === q.length ? score : 0;
}
