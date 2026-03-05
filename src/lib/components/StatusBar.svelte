<script lang="ts">
	import { page } from '$app/stores';
	import { scrollPercent } from '$lib/stores/scroll';

	$: currentPath = $page.url.pathname;
	$: fileName = currentPath === '/' ? '~/index' : `~${currentPath}`;
</script>

<div class="status-bar">
	<div class="left">
		<span class="mode">NORMAL</span>
		<span class="file">{fileName}</span>
	</div>
	<div class="right">
		<span class="filetype">markdown</span>
		<span class="scroll">{$scrollPercent}</span>
	</div>
</div>

<style>
	.status-bar {
		position: fixed;
		bottom: 2.25rem;
		left: 0;
		right: 0;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.2rem 1rem;
		background: var(--surface0);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--subtext0);
	}

	.left, .right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.mode {
		background: var(--accent);
		color: var(--crust);
		padding: 0.1em 0.5em;
		font-weight: 700;
		font-size: 0.65rem;
		letter-spacing: 0.05em;
	}

	.file {
		color: var(--text);
	}

	.filetype {
		color: var(--overlay1);
	}

	.scroll {
		color: var(--accent2);
		min-width: 2.5em;
		text-align: right;
	}
</style>
