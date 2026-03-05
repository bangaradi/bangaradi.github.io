<script lang="ts">
	const albums = [
		{ artist: 'Radiohead', album: 'Kid A', year: 2000, thoughts: 'The sound of the future arriving early. Everything In Its Right Place is transcendent.', color: 'var(--pink)' },
		{ artist: 'Daft Punk', album: 'Discovery', year: 2001, thoughts: 'Pure joy in electronic form. Every track is a banger.', color: 'var(--yellow)' },
		{ artist: 'Nujabes', album: 'Metaphorical Music', year: 2003, thoughts: 'The perfect coding soundtrack. Lo-fi before lo-fi was a thing.', color: 'var(--teal)' },
		{ artist: 'Boards of Canada', album: 'Music Has the Right to Children', year: 1998, thoughts: 'Nostalgic and haunting. Feels like half-remembered dreams.', color: 'var(--lavender)' },
		{ artist: 'Tame Impala', album: 'Currents', year: 2015, thoughts: 'Psychedelic pop perfection. Let It Happen is a journey.', color: 'var(--mauve)' },
		{ artist: 'Aphex Twin', album: 'Selected Ambient Works 85-92', year: 1992, thoughts: 'Ambient electronic at its purest. Timeless.', color: 'var(--sapphire)' }
	];
</script>

<div class="page">
	<h1 class="page-title"><span class="icon">&amp;</span> music</h1>
	<p class="page-desc">Albums I keep coming back to.</p>

	<div class="album-grid">
		{#each albums as album}
			<div class="album-card">
				<div class="album-art" style="border-color: {album.color}">
					<span class="album-icon" style="color: {album.color}">&amp;</span>
				</div>
				<div class="album-info">
					<div class="album-name">{album.album}</div>
					<div class="album-artist">{album.artist} <span class="album-year">({album.year})</span></div>
					<p class="album-thoughts">{album.thoughts}</p>
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
	.icon { color: var(--pink); }
	.page-desc {
		color: var(--overlay1);
		font-size: 0.85rem;
		margin-bottom: 2rem;
	}

	.album-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 0.75rem;
	}

	.album-card {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background: var(--bg-card);
		border: 1px solid var(--surface0);
		border-radius: 4px;
		transition: all 0.2s;
	}
	.album-card:hover {
		border-color: var(--surface1);
		box-shadow: 0 0 12px var(--glow);
	}

	.album-art {
		width: 64px;
		height: 64px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--surface0);
		border: 2px solid;
		border-radius: 2px;
		image-rendering: pixelated;
	}

	.album-icon {
		font-family: var(--font-pixel);
		font-size: 1.2rem;
	}

	.album-info {
		flex: 1;
		min-width: 0;
	}

	.album-name {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--text);
		margin-bottom: 0.2rem;
	}
	.album-artist {
		font-size: 0.8rem;
		color: var(--subtext0);
		margin-bottom: 0.4rem;
	}
	.album-year {
		color: var(--overlay0);
	}
	.album-thoughts {
		font-size: 0.75rem;
		color: var(--overlay1);
		line-height: 1.5;
	}
</style>
