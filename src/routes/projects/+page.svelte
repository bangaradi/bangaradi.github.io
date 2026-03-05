<script lang="ts">
	const projects = [
		{ name: 'vim-nav.js', tech: ['typescript', 'vim'], description: 'A vim-style navigation library for web apps.', url: '#' },
		{ name: 'pixelchat', tech: ['rust', 'websocket'], description: 'Real-time chat with pixel art avatars.', url: '#' },
		{ name: 'dotfiles', tech: ['shell', 'lua'], description: 'My development environment configuration.', url: '#' },
		{ name: 'markdown-garden', tech: ['svelte', 'mdsvex'], description: 'This very website.', url: '#' },
		{ name: 'termcolors', tech: ['go', 'cli'], description: 'Terminal color scheme previewer and converter.', url: '#' }
	];
</script>

<div class="page">
	<h1 class="page-title"><span class="icon">></span> projects</h1>
	<p class="page-desc">Things I've built, broken, and rebuilt.</p>

	<div class="project-grid">
		{#each projects as project}
			<a href={project.url} class="project-card">
				<div class="project-name">{project.name}</div>
				<p class="project-desc">{project.description}</p>
				<div class="project-tech">
					{#each project.tech as t}
						<span class="tech-tag">{t}</span>
					{/each}
				</div>
			</a>
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
	.icon { color: var(--green); }
	.page-desc {
		color: var(--overlay1);
		font-size: 0.85rem;
		margin-bottom: 2rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 0.75rem;
	}

	.project-card {
		padding: 1.25rem;
		background: var(--bg-card);
		border: 1px solid var(--surface0);
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.2s;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.project-card:hover {
		border-color: var(--green);
		box-shadow: 0 0 16px rgba(166, 227, 161, 0.15);
		transform: translateY(-2px);
	}

	.project-name {
		font-family: var(--font-pixel);
		font-size: 0.7rem;
		color: var(--green);
	}
	.project-desc {
		color: var(--subtext0);
		font-size: 0.8rem;
		line-height: 1.5;
	}

	.project-tech {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
		margin-top: auto;
	}
	.tech-tag {
		font-family: var(--font-pixel);
		font-size: 0.5rem;
		padding: 0.15em 0.5em;
		background: var(--surface0);
		color: var(--accent2);
		border-radius: 2px;
	}
</style>
