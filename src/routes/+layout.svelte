<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';
	import CommandBar from '$lib/components/CommandBar.svelte';
	import HelpModal from '$lib/components/HelpModal.svelte';
	import BootSequence from '$lib/components/BootSequence.svelte';
	import { bootComplete } from '$lib/stores/boot';
	import { scrollY, scrollHeight, clientHeight } from '$lib/stores/scroll';
	import { browser } from '$app/environment';

	let { children } = $props();

	function handleScroll() {
		if (browser) {
			$scrollY = window.scrollY;
			$scrollHeight = document.documentElement.scrollHeight;
			$clientHeight = window.innerHeight;
		}
	}
</script>

<svelte:window onscroll={handleScroll} />

{#if !$bootComplete}
	<BootSequence />
{/if}

<div class="shell" class:booted={$bootComplete}>
	<NavBar />
	<main class="content">
		{@render children()}
	</main>
	<StatusBar />
	<CommandBar />
	<HelpModal />
</div>

<style>
	.shell {
		min-height: 100vh;
		opacity: 0;
		transition: opacity 0.5s ease;
	}

	.shell.booted {
		opacity: 1;
	}

	.content {
		padding: 4.5rem 1.5rem 5rem;
		max-width: 900px;
		margin: 0 auto;
		min-height: calc(100vh - 6rem);
	}

	@media (max-width: 640px) {
		.content {
			padding: 4rem 1rem 5rem;
		}
	}
</style>
