<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		setTimeout(() => visible = true, 100);
	});

	const recentActivity = [
		{ type: 'blog', title: 'Building a Terminal Website', date: '2026-03-01' },
		{ type: 'project', title: 'vim-nav.js', date: '2026-02-28' },
		{ type: 'movie', title: 'Blade Runner 2049', date: '2026-02-25' },
		{ type: 'note', title: 'On Digital Gardens', date: '2026-02-20' },
		{ type: 'music', title: 'Radiohead - Kid A', date: '2026-02-18' }
	];

	const typeIcons: Record<string, string> = {
		blog: '#',
		project: '>',
		movie: '@',
		note: '*',
		music: '&'
	};

	const typeColors: Record<string, string> = {
		blog: 'var(--accent)',
		project: 'var(--green)',
		movie: 'var(--peach)',
		note: 'var(--sapphire)',
		music: 'var(--pink)'
	};
</script>

<div class="home" class:visible>
	<section class="hero">
		<pre class="ascii-name">
{"     _       _ _ _               "}
{"    / \\   __| (_) |_ _   _  __ _ "}
{"   / _ \\ / _` | | __| | | |/ _` |"}
{"  / ___ \\ (_| | | |_| |_| | (_| |"}
{" /_/   \\_\\__,_|_|\\__|\\__, |\\__,_|"}
{"                      |___/       "}
</pre>
		<div class="intro">
			<p class="greeting">
				<span class="prompt">$</span> echo "Hello, World!"
			</p>
			<p class="bio">
				I'm <span class="highlight">Aditya Bangar</span>, a developer who builds things
				for the web. This is my digital garden — a place for projects, thoughts,
				reviews, and everything in between.
			</p>
			<p class="hint">
				<span class="dim">// tip: press</span> <kbd>:</kbd> <span class="dim">for commands or</span> <kbd>/</kbd> <span class="dim">to search</span>
			</p>
		</div>
	</section>

	<section class="recent">
		<h2 class="section-title">
			<span class="title-icon">~</span> recent activity
		</h2>
		<div class="activity-list">
			{#each recentActivity as item, i}
				<div class="activity-item" style="animation-delay: {0.2 + i * 0.08}s">
					<span class="activity-icon" style="color: {typeColors[item.type]}">{typeIcons[item.type]}</span>
					<span class="activity-title">{item.title}</span>
					<span class="activity-type">{item.type}</span>
					<span class="activity-date">{item.date}</span>
				</div>
			{/each}
		</div>
	</section>

	<section class="links">
		<h2 class="section-title">
			<span class="title-icon">></span> quick links
		</h2>
		<div class="link-grid">
			<a href="/projects" class="link-card">
				<span class="card-icon">></span>
				<span class="card-label">projects</span>
				<span class="card-desc">things I've built</span>
			</a>
			<a href="/blog" class="link-card">
				<span class="card-icon">#</span>
				<span class="card-label">blog</span>
				<span class="card-desc">long-form thoughts</span>
			</a>
			<a href="/notes" class="link-card">
				<span class="card-icon">*</span>
				<span class="card-label">notes</span>
				<span class="card-desc">scratchpad</span>
			</a>
			<a href="/movies" class="link-card">
				<span class="card-icon">@</span>
				<span class="card-label">movies</span>
				<span class="card-desc">film reviews</span>
			</a>
			<a href="/music" class="link-card">
				<span class="card-icon">&amp;</span>
				<span class="card-label">music</span>
				<span class="card-desc">what I'm listening to</span>
			</a>
			<a href="/about" class="link-card">
				<span class="card-icon">?</span>
				<span class="card-label">about</span>
				<span class="card-desc">who am I</span>
			</a>
		</div>
	</section>
</div>

<style>
	.home {
		opacity: 0;
		transform: translateY(8px);
		transition: all 0.6s ease;
	}
	.home.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero {
		margin-bottom: 3rem;
	}

	.ascii-name {
		font-family: var(--font-mono);
		font-size: 0.6rem;
		color: var(--accent);
		text-shadow: 0 0 20px var(--glow);
		line-height: 1.2;
		margin-bottom: 2rem;
		white-space: pre;
		overflow-x: auto;
	}

	.intro {
		max-width: 60ch;
	}

	.greeting {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: var(--subtext0);
	}

	.prompt {
		color: var(--green);
		font-weight: 700;
	}

	.bio {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--text);
		margin-bottom: 1rem;
	}

	.highlight {
		color: var(--accent);
		font-weight: 600;
	}

	.hint {
		font-size: 0.8rem;
	}

	.dim {
		color: var(--overlay0);
	}

	kbd {
		background: var(--surface0);
		padding: 0.1em 0.5em;
		border-radius: 3px;
		font-size: 0.75rem;
		color: var(--accent);
		border: 1px solid var(--surface1);
		font-family: var(--font-mono);
	}

	.section-title {
		font-family: var(--font-pixel);
		font-size: 0.7rem;
		color: var(--accent2);
		text-transform: lowercase;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.title-icon {
		color: var(--accent);
	}

	.recent {
		margin-bottom: 3rem;
	}

	.activity-list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.activity-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		transition: background 0.15s;
		opacity: 0;
		animation: fadeIn 0.3s ease forwards;
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateX(-8px); }
		to { opacity: 1; transform: translateX(0); }
	}

	.activity-item:hover {
		background: var(--surface0);
	}

	.activity-icon {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		width: 1.2em;
		text-align: center;
	}

	.activity-title {
		flex: 1;
		color: var(--text);
	}

	.activity-type {
		color: var(--overlay0);
		font-family: var(--font-pixel);
		font-size: 0.55rem;
	}

	.activity-date {
		color: var(--overlay0);
		font-size: 0.75rem;
		min-width: 7em;
		text-align: right;
	}

	.link-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0.75rem;
	}

	.link-card {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem;
		background: var(--bg-card);
		border: 1px solid var(--surface0);
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.2s;
	}

	.link-card:hover {
		border-color: var(--accent);
		box-shadow: 0 0 16px var(--glow);
		transform: translateY(-2px);
	}

	.card-icon {
		font-family: var(--font-pixel);
		font-size: 0.8rem;
		color: var(--accent);
	}

	.card-label {
		font-family: var(--font-pixel);
		font-size: 0.65rem;
		color: var(--text);
	}

	.card-desc {
		font-size: 0.75rem;
		color: var(--overlay0);
	}

	@media (max-width: 480px) {
		.ascii-name {
			font-size: 0.38rem;
		}
		.link-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
