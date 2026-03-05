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
			<p>Hey, I'm <span class="hl">Aditya Bangar</span>.</p>
		</div>
	</section>

	<section class="details">
		<div class="detail-block">
			<h2 class="detail-title">skills</h2>
			<p class="colophon-text">everything LLM inference</p>
		</div>

		<div class="detail-block">
			<h2 class="detail-title">links</h2>
			<p class="wip">&lt;links WIP&gt;</p>
		</div>
	</section>

	<section class="colophon-section">
		<h2 class="detail-title">colophon</h2>
		<p class="colophon-text">f**king around and figuring it...</p>
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
		align-items: flex-start;
		margin-bottom: 3rem;
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

	.wip {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--overlay0);
		font-style: italic;
	}

	.colophon-text {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--overlay1);
		line-height: 1.6;
	}

	@media (max-width: 640px) {
		.details {
			grid-template-columns: 1fr;
		}
	}
</style>
