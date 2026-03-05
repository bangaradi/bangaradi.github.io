<script lang="ts">
	import { showHelp, commands } from '$lib/stores/command';

	function close() {
		$showHelp = false;
	}
</script>

<svelte:window onkeydown={(e) => $showHelp && e.key === 'Escape' && close()} />

{#if $showHelp}
	<div class="overlay" onclick={close} role="dialog" tabindex="-1">
		<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
		<div class="modal" onclick={(e) => e.stopPropagation()}>
			<div class="header">
				<span class="title">:help</span>
				<button class="close-btn" onclick={close}>x</button>
			</div>
			<div class="content">
				<div class="section">
					<h3>Navigation</h3>
					<p class="hint">Press <kbd>:</kbd> to enter command mode, <kbd>/</kbd> to search</p>
				</div>
				<div class="commands">
					{#each commands as cmd}
						<div class="cmd-row">
							<code class="cmd-name">{cmd.usage}</code>
							<span class="cmd-desc">{cmd.description}</span>
						</div>
					{/each}
				</div>
				<div class="section">
					<h3>Tips</h3>
					<p><kbd>Tab</kbd> to autocomplete, <kbd>Arrow keys</kbd> to navigate suggestions</p>
					<p><kbd>Enter</kbd> to execute, <kbd>Esc</kbd> to close</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 2000;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(4px);
	}

	.modal {
		background: var(--mantle);
		border: 1px solid var(--surface0);
		border-radius: 6px;
		width: 90%;
		max-width: 520px;
		max-height: 80vh;
		overflow-y: auto;
		box-shadow: 0 0 40px var(--glow);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--surface0);
	}

	.title {
		font-family: var(--font-pixel);
		font-size: 0.8rem;
		color: var(--accent);
	}

	.close-btn {
		background: none;
		border: none;
		color: var(--overlay1);
		font-family: var(--font-mono);
		font-size: 1rem;
		cursor: pointer;
	}
	.close-btn:hover {
		color: var(--red);
	}

	.content {
		padding: 1rem;
	}

	.section {
		margin-bottom: 1rem;
	}

	.section h3 {
		font-family: var(--font-pixel);
		font-size: 0.65rem;
		color: var(--accent2);
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.hint {
		color: var(--subtext0);
		font-size: 0.8rem;
		margin-bottom: 0.5rem;
	}

	.commands {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-bottom: 1rem;
	}

	.cmd-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.35rem 0.5rem;
		border-radius: 3px;
	}

	.cmd-row:hover {
		background: var(--surface0);
	}

	.cmd-name {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--accent);
	}

	.cmd-desc {
		font-size: 0.75rem;
		color: var(--overlay1);
	}

	kbd {
		background: var(--surface0);
		padding: 0.1em 0.4em;
		border-radius: 3px;
		font-size: 0.75rem;
		color: var(--accent);
		border: 1px solid var(--surface1);
	}

	p {
		color: var(--subtext0);
		font-size: 0.8rem;
		margin: 0.3rem 0;
	}
</style>
