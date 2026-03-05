<script lang="ts">
	const notes = [
		{ title: 'On Digital Gardens', date: '2026-02-20', tags: ['meta', 'web'] },
		{ title: 'Neovim Config Tips', date: '2026-02-10', tags: ['vim', 'tools'] },
		{ title: 'CSS Container Queries', date: '2026-01-30', tags: ['css', 'web'] },
		{ title: 'Functional Programming Patterns', date: '2026-01-15', tags: ['fp', 'concepts'] },
		{ title: 'Shell Scripting Gotchas', date: '2026-01-05', tags: ['shell', 'linux'] },
	];
</script>

<div class="page">
	<h1 class="page-title"><span class="icon">*</span> notes</h1>
	<p class="page-desc">Short thoughts, snippets, and scratchpad entries.</p>

	<div class="note-list">
		{#each notes as note}
			<div class="note-item">
				<span class="note-bullet">*</span>
				<span class="note-title">{note.title}</span>
				<div class="note-meta">
					{#each note.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
					<span class="note-date">{note.date}</span>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.page {
		animation: fadeIn 0.4s ease;
	}
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(8px); }
		to { opacity: 1; transform: translateY(0); }
	}
	.page-title {
		font-family: var(--font-pixel);
		font-size: 1rem;
		color: var(--accent);
		margin-bottom: 0.5rem;
	}
	.icon { color: var(--sapphire); }
	.page-desc {
		color: var(--overlay1);
		font-size: 0.85rem;
		margin-bottom: 2rem;
	}
	.note-list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.note-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.6rem 0.75rem;
		border-radius: 4px;
		transition: background 0.15s;
		cursor: pointer;
	}
	.note-item:hover {
		background: var(--surface0);
	}
	.note-bullet {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--sapphire);
	}
	.note-title {
		flex: 1;
		font-size: 0.85rem;
		color: var(--text);
	}
	.note-meta {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}
	.tag {
		font-family: var(--font-pixel);
		font-size: 0.5rem;
		padding: 0.1em 0.4em;
		background: var(--surface0);
		color: var(--accent2);
		border-radius: 2px;
	}
	.note-date {
		color: var(--overlay0);
		font-size: 0.75rem;
		min-width: 7em;
		text-align: right;
	}
</style>
