<script lang="ts">
	import { page } from '$app/stores';
	import { navItems } from '$lib/stores/command';

	$: currentPath = $page.url.pathname;
</script>

<nav class="navbar">
	<a href="/" class="logo">
		<span class="logo-icon">$</span>
		<span class="logo-text">aditya</span>
	</a>
	<div class="nav-links">
		{#each navItems.filter(i => i.path !== '/') as item}
			<a
				href={item.path}
				class="nav-link"
				class:active={currentPath.startsWith(item.path)}
			>
				<span class="nav-icon">{item.icon}</span>
				<span class="nav-label">{item.label}</span>
			</a>
		{/each}
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.5rem;
		background: var(--bg-deep);
		border-bottom: 1px solid var(--surface0);
		backdrop-filter: blur(8px);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-pixel);
		font-size: 0.75rem;
		color: var(--accent);
		text-decoration: none;
	}

	.logo:hover {
		text-shadow: 0 0 12px var(--glow-strong);
	}

	.logo-icon {
		color: var(--accent2);
	}

	.nav-links {
		display: flex;
		gap: 0.25rem;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		padding: 0.35rem 0.65rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--overlay1);
		text-decoration: none;
		border-radius: 3px;
		transition: all 0.15s;
	}

	.nav-link:hover {
		color: var(--text);
		background: var(--surface0);
	}

	.nav-link.active {
		color: var(--accent);
		background: var(--surface0);
	}

	.nav-icon {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--accent2);
	}

	.nav-link.active .nav-icon {
		color: var(--accent);
	}

	@media (max-width: 640px) {
		.nav-label {
			display: none;
		}
		.nav-link {
			padding: 0.35rem 0.5rem;
		}
		.nav-icon {
			font-size: 0.75rem;
		}
	}
</style>
