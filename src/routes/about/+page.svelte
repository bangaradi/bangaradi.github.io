<div class="page">
	<h1 class="page-title"><span class="icon">?</span> about</h1>

	<section class="bio">
		<pre class="ascii-avatar">
{"  ┌─────────┐ "}
{"  │  ◠   ◠  │ "}
{"  │    ▽    │ "}
{"  │  ╰───╯  │ "}
{"  └─────────┘ "}
</pre>
		<div class="bio-text">
			<p>
				Hey, I'm <span class="hl">Aditya Bangar</span>. I'm a developer who loves building
				things for the web — from CLI tools to full-stack apps to weird experiments like this site.
			</p>
			<p>
				When I'm not coding, I'm watching films, discovering music, or scribbling notes about
				things that interest me. This site is my digital garden: a living collection of everything
				I care about.
			</p>
		</div>
	</section>

	<section class="details">
		<div class="detail-block">
			<h2 class="detail-title">skills</h2>
			<div class="skill-list">
				<span class="skill">TypeScript</span>
				<span class="skill">Rust</span>
				<span class="skill">Go</span>
				<span class="skill">Svelte</span>
				<span class="skill">React</span>
				<span class="skill">Node.js</span>
				<span class="skill">Linux</span>
				<span class="skill">Neovim</span>
			</div>
		</div>

		<div class="detail-block">
			<h2 class="detail-title">links</h2>
			<div class="link-list">
				<span class="link-item"><span class="link-icon">$</span> github.com/aditya</span>
				<span class="link-item"><span class="link-icon">@</span> twitter.com/aditya</span>
				<span class="link-item"><span class="link-icon">#</span> aditya@email.com</span>
			</div>
		</div>
	</section>

	<section class="colophon">
		<h2 class="detail-title">colophon</h2>
		<p class="colophon-text">
			Built with SvelteKit. Styled with Catppuccin Mocha. Set in Press Start 2P and JetBrains Mono.
			Vim-inspired command bar because why not. Deployed as a static site.
		</p>
	</section>
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
		margin-bottom: 2rem;
	}
	.icon { color: var(--yellow); }

	.bio {
		display: flex;
		gap: 2rem;
		margin-bottom: 3rem;
		align-items: flex-start;
	}

	.ascii-avatar {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--accent);
		text-shadow: 0 0 10px var(--glow);
		line-height: 1.3;
		flex-shrink: 0;
		white-space: pre;
	}

	.bio-text p {
		font-size: 0.9rem;
		line-height: 1.8;
		color: var(--text);
		margin-bottom: 1rem;
	}

	.hl {
		color: var(--accent);
		font-weight: 600;
	}

	.details {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.detail-title {
		font-family: var(--font-pixel);
		font-size: 0.65rem;
		color: var(--accent2);
		text-transform: lowercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.75rem;
	}

	.skill-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.skill {
		font-family: var(--font-pixel);
		font-size: 0.5rem;
		padding: 0.3em 0.6em;
		background: var(--surface0);
		color: var(--text);
		border-radius: 2px;
		border: 1px solid var(--surface1);
	}

	.link-list {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.link-item {
		font-size: 0.8rem;
		color: var(--subtext0);
	}

	.link-icon {
		color: var(--accent);
		margin-right: 0.4rem;
		font-family: var(--font-pixel);
		font-size: 0.6rem;
	}

	.colophon-text {
		color: var(--overlay1);
		font-size: 0.8rem;
		line-height: 1.6;
		max-width: 50ch;
	}

	@media (max-width: 640px) {
		.bio {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
		.details {
			grid-template-columns: 1fr;
		}
	}
</style>
