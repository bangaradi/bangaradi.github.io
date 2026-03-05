<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import {
		commandBarActive,
		commandInput,
		commandMode,
		commands,
		navItems,
		showHelp,
		fuzzyMatch,
		fuzzyScore
	} from '$lib/stores/command';

	let inputEl: HTMLInputElement;
	let selectedIndex = 0;

	interface Suggestion {
		label: string;
		description: string;
		action: () => void;
	}

	$: suggestions = getSuggestions($commandInput, $commandMode);
	$: selectedIndex = Math.min(selectedIndex, Math.max(suggestions.length - 1, 0));

	function getSuggestions(input: string, mode: ':' | '/' | null): Suggestion[] {
		if (!mode) return [];

		if (mode === ':') {
			const trimmed = input.slice(1).trim();

			if (trimmed.startsWith('open ')) {
				const query = trimmed.slice(5).trim();
				if (!query) {
					return navItems.map((item) => ({
						label: `:open ${item.label}`,
						description: item.path,
						action: () => goto(item.path)
					}));
				}
				return navItems
					.filter((item) => fuzzyMatch(query, item.label) || fuzzyMatch(query, item.path))
					.sort(
						(a, b) =>
							fuzzyScore(query, b.label) +
							fuzzyScore(query, b.path) -
							(fuzzyScore(query, a.label) + fuzzyScore(query, a.path))
					)
					.map((item) => ({
						label: `:open ${item.label}`,
						description: item.path,
						action: () => goto(item.path)
					}));
			}

			return commands
				.filter((cmd) => !trimmed || fuzzyMatch(trimmed, cmd.name.slice(1)))
				.sort((a, b) =>
					trimmed
						? fuzzyScore(trimmed, b.name.slice(1)) - fuzzyScore(trimmed, a.name.slice(1))
						: 0
				)
				.slice(0, 8)
				.map((cmd) => ({
					label: cmd.name,
					description: cmd.description,
					action: () => executeCommand(cmd.name)
				}));
		}

		if (mode === '/') {
			const query = input.slice(1).trim();
			if (!query) return [];
			return navItems
				.filter((item) => fuzzyMatch(query, item.label))
				.map((item) => ({
					label: item.label,
					description: item.path,
					action: () => goto(item.path)
				}));
		}

		return [];
	}

	function executeCommand(cmd: string) {
		const parts = cmd.trim().split(/\s+/);
		const base = parts[0];

		switch (base) {
			case ':help':
				$showHelp = true;
				break;
			case ':open':
				if (parts[1]) {
					const target = navItems.find(
						(item) =>
							item.label.toLowerCase() === parts.slice(1).join(' ').toLowerCase() ||
							fuzzyMatch(parts.slice(1).join(' '), item.label)
					);
					if (target) goto(target.path);
				}
				break;
			case ':home':
				goto('/');
				break;
			case ':blog':
				goto('/blog');
				break;
			case ':projects':
				goto('/projects');
				break;
			case ':notes':
				goto('/notes');
				break;
			case ':movies':
				goto('/movies');
				break;
			case ':music':
				goto('/music');
				break;
			case ':about':
				goto('/about');
				break;
			case ':scrollup':
				window.scrollBy({ top: -300, behavior: 'smooth' });
				break;
			case ':scrolldown':
				window.scrollBy({ top: 300, behavior: 'smooth' });
				break;
			case ':top':
				window.scrollTo({ top: 0, behavior: 'smooth' });
				break;
			case ':bottom':
				window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
				break;
		}
		close();
	}

	function close() {
		$commandBarActive = false;
		$commandInput = '';
		$commandMode = null;
		selectedIndex = 0;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.preventDefault();
			close();
			return;
		}
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			selectedIndex = Math.min(selectedIndex + 1, suggestions.length - 1);
			return;
		}
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			selectedIndex = Math.max(selectedIndex - 1, 0);
			return;
		}
		if (e.key === 'Tab') {
			e.preventDefault();
			if (suggestions.length > 0) {
				$commandInput = suggestions[selectedIndex].label;
			}
			return;
		}
		if (e.key === 'Enter') {
			e.preventDefault();
			if (suggestions.length > 0 && selectedIndex < suggestions.length) {
				suggestions[selectedIndex].action();
			} else if ($commandMode === ':') {
				executeCommand($commandInput);
			}
			return;
		}
	}

	function handleGlobalKeydown(e: KeyboardEvent) {
		if ($commandBarActive) return;
		const tag = (e.target as HTMLElement)?.tagName;
		if (tag === 'INPUT' || tag === 'TEXTAREA') return;

		if (e.key === ':' || e.key === '/') {
			e.preventDefault();
			$commandBarActive = true;
			$commandMode = e.key as ':' | '/';
			$commandInput = e.key;
			requestAnimationFrame(() => inputEl?.focus());
		}
	}

	$: if ($commandBarActive && inputEl) {
		requestAnimationFrame(() => inputEl?.focus());
	}
</script>

<svelte:window onkeydown={handleGlobalKeydown} />

<div class="command-bar" class:active={$commandBarActive}>
	{#if $commandBarActive && suggestions.length > 0}
		<div class="suggestions">
			{#each suggestions as suggestion, i}
				<button
					class="suggestion"
					class:selected={i === selectedIndex}
					onmouseenter={() => (selectedIndex = i)}
					onclick={() => suggestion.action()}
				>
					<span class="suggestion-label">{suggestion.label}</span>
					<span class="suggestion-desc">{suggestion.description}</span>
				</button>
			{/each}
		</div>
	{/if}

	<div class="input-row">
		<span class="prompt-icon">{$commandMode || '>'}</span>
		{#if $commandBarActive}
			<input
				bind:this={inputEl}
				bind:value={$commandInput}
				onkeydown={handleKeydown}
				onblur={() => setTimeout(close, 150)}
				class="command-input"
				spellcheck="false"
				autocomplete="off"
				placeholder={$commandMode === ':' ? 'type a command...' : 'search...'}
			/>
		{:else}
			<button class="command-placeholder" onclick={() => {
				$commandBarActive = true;
				$commandMode = ':';
				$commandInput = ':';
			}}>
				Press <kbd>:</kbd> for commands, <kbd>/</kbd> to search
			</button>
		{/if}
		<span class="cursor-blink">_</span>
	</div>
</div>

<style>
	.command-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: var(--mantle);
		border-top: 1px solid var(--surface0);
		font-family: var(--font-mono);
	}

	.input-row {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		gap: 0.5rem;
	}

	.prompt-icon {
		font-family: var(--font-pixel);
		font-size: 0.7rem;
		color: var(--accent);
		flex-shrink: 0;
	}

	.command-input {
		flex: 1;
		background: none;
		border: none;
		color: var(--text);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		outline: none;
		caret-color: var(--accent);
	}

	.command-placeholder {
		flex: 1;
		background: none;
		border: none;
		color: var(--overlay0);
		font-family: var(--font-mono);
		font-size: 0.8rem;
		text-align: left;
		cursor: pointer;
		padding: 0;
	}

	.command-placeholder kbd {
		background: var(--surface0);
		padding: 0.1em 0.4em;
		border-radius: 3px;
		font-size: 0.75rem;
		color: var(--accent);
		border: 1px solid var(--surface1);
	}

	.cursor-blink {
		color: var(--accent);
		animation: blink 1s step-end infinite;
		font-weight: bold;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	.suggestions {
		border-bottom: 1px solid var(--surface0);
		max-height: 240px;
		overflow-y: auto;
	}

	.suggestion {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0.5rem 1rem;
		background: none;
		border: none;
		color: var(--text);
		font-family: var(--font-mono);
		font-size: 0.8rem;
		cursor: pointer;
		text-align: left;
		transition: background 0.1s;
	}

	.suggestion:hover, .suggestion.selected {
		background: var(--surface0);
	}

	.suggestion-label {
		color: var(--accent2);
	}

	.suggestion.selected .suggestion-label {
		color: var(--accent);
	}

	.suggestion-desc {
		color: var(--overlay0);
		font-size: 0.7rem;
	}
</style>
