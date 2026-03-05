<script lang="ts">
	import { onMount } from 'svelte';
	import { markBooted } from '$lib/stores/boot';

	let lines: string[] = [];
	let currentLine = 0;
	let done = false;

	const bootLines = [
		'> initializing system...',
		'> loading modules: [core, ui, content]',
		'> mounting filesystem at ~/aditya',
		'> establishing neural link...',
		'> theme: catppuccin-mocha [OK]',
		'> font: pixel-matrix [OK]',
		'> scanning digital garden...',
		'  - blog/        [7 entries]',
		'  - projects/    [5 entries]',
		'  - notes/       [12 entries]',
		'  - movies/      [9 entries]',
		'  - music/       [15 entries]',
		'> all systems nominal.',
		'> welcome, visitor.',
		''
	];

	onMount(() => {
		const interval = setInterval(() => {
			if (currentLine < bootLines.length) {
				lines = [...lines, bootLines[currentLine]];
				currentLine++;
			} else {
				clearInterval(interval);
				setTimeout(() => {
					done = true;
					markBooted();
				}, 400);
			}
		}, 120);

		return () => clearInterval(interval);
	});
</script>

{#if !done}
	<div class="boot-screen">
		<div class="boot-content">
			<pre class="ascii-header">
{"     _       _ _ _               "}
{"    / \\   __| (_) |_ _   _  __ _ "}
{"   / _ \\ / _` | | __| | | |/ _` |"}
{"  / ___ \\ (_| | | |_| |_| | (_| |"}
{" /_/   \\_\\__,_|_|\\__|\\__, |\\__,_|"}
{"                      |___/       "}
</pre>
			<div class="boot-lines">
				{#each lines as line}
					<div class="boot-line">{line}</div>
				{/each}
				{#if currentLine < bootLines.length}
					<span class="cursor">_</span>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.boot-screen {
		position: fixed;
		inset: 0;
		z-index: 10000;
		background: var(--crust);
		display: flex;
		align-items: center;
		justify-content: center;
		animation: fadeOut 0.5s ease forwards;
		animation-delay: 2.8s;
	}

	@keyframes fadeOut {
		to { opacity: 0; pointer-events: none; }
	}

	.boot-content {
		max-width: 600px;
		width: 90%;
	}

	.ascii-header {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		color: var(--accent);
		text-shadow: 0 0 10px var(--glow);
		line-height: 1.2;
		margin-bottom: 1.5rem;
		white-space: pre;
	}

	.boot-lines {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		line-height: 1.6;
	}

	.boot-line {
		color: var(--subtext0);
		animation: lineIn 0.1s ease;
	}

	@keyframes lineIn {
		from { opacity: 0; transform: translateX(-4px); }
		to { opacity: 1; transform: translateX(0); }
	}

	.cursor {
		color: var(--accent);
		animation: blink 0.6s step-end infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	@media (max-width: 480px) {
		.ascii-header {
			font-size: 0.4rem;
		}
	}
</style>
