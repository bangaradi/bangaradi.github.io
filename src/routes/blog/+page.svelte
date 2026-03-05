<script lang="ts">
	const posts = [
		{ slug: 'building-a-terminal-website', title: 'Building a Terminal Website', date: '2026-03-01', tags: ['svelte', 'web', 'design'], excerpt: 'How I built a vim-inspired personal site with SvelteKit.' },
		{ slug: 'rust-cli-tools', title: 'My Favorite Rust CLI Tools', date: '2026-02-15', tags: ['rust', 'cli', 'tools'], excerpt: 'A roundup of CLI tools written in Rust that I use daily.' },
		{ slug: 'digital-gardens', title: 'Why Digital Gardens?', date: '2026-01-20', tags: ['meta', 'web'], excerpt: 'On building a personal space on the internet that grows with you.' }
	];
</script>

<div class="page">
	<h1 class="page-title"><span class="icon">#</span> blog</h1>
	<p class="page-desc">Long-form thoughts on code, tools, and the web.</p>

	<div class="post-list">
		{#each posts as post}
			<div class="post-item">
				<div class="post-header">
					<span class="post-title">{post.title}</span>
					<span class="post-date">{post.date}</span>
				</div>
				<p class="post-excerpt">{post.excerpt}</p>
				<div class="post-tags">
					{#each post.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
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
	.icon {
		color: var(--accent2);
	}
	.page-desc {
		color: var(--overlay1);
		font-size: 0.85rem;
		margin-bottom: 2rem;
	}

	.post-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.post-item {
		display: block;
		padding: 1rem;
		background: var(--bg-card);
		border: 1px solid var(--surface0);
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.2s;
	}
	.post-item:hover {
		border-color: var(--accent);
		box-shadow: 0 0 12px var(--glow);
	}

	.post-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 0.4rem;
	}
	.post-title {
		font-family: var(--font-pixel);
		font-size: 0.7rem;
		color: var(--text);
	}
	.post-date {
		color: var(--overlay0);
		font-size: 0.75rem;
	}
	.post-excerpt {
		color: var(--subtext0);
		font-size: 0.8rem;
		margin-bottom: 0.5rem;
	}

	.post-tags {
		display: flex;
		gap: 0.4rem;
	}
	.tag {
		font-family: var(--font-pixel);
		font-size: 0.5rem;
		padding: 0.15em 0.5em;
		background: var(--surface0);
		color: var(--accent2);
		border-radius: 2px;
	}
</style>
