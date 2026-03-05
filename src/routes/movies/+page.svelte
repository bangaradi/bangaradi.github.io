<script lang="ts">
	const movies = [
		{ title: 'Blade Runner 2049', year: 2017, rating: 5, genre: 'sci-fi', review: 'A masterpiece of visual storytelling. The sound design alone is worth the watch.' },
		{ title: 'Akira', year: 1988, rating: 5, genre: 'anime', review: 'Cyberpunk at its finest. The animation still holds up decades later.' },
		{ title: 'The Social Network', year: 2010, rating: 4, genre: 'drama', review: 'Sorkin\'s dialogue is electric. Fincher makes coding look cool.' },
		{ title: 'Ghost in the Shell', year: 1995, rating: 5, genre: 'anime', review: 'Philosophically dense and visually stunning. Peak cyberpunk cinema.' },
		{ title: 'Tenet', year: 2020, rating: 3, genre: 'sci-fi', review: 'Ambitious but cold. The concept outshines the characters.' },
		{ title: 'Interstellar', year: 2014, rating: 4, genre: 'sci-fi', review: 'Nolan at his most emotional. The docking scene is perfection.' }
	];

	function stars(n: number): string {
		return '\u2588'.repeat(n) + '\u2591'.repeat(5 - n);
	}
</script>

<div class="page">
	<h1 class="page-title"><span class="icon">@</span> movies</h1>
	<p class="page-desc">Film reviews and ratings. Pixel stars out of 5.</p>

	<div class="movie-list">
		{#each movies as movie}
			<div class="movie-card">
				<div class="movie-header">
					<span class="movie-title">{movie.title}</span>
					<span class="movie-year">{movie.year}</span>
				</div>
				<div class="movie-rating" title="{movie.rating}/5">
					<span class="stars">{stars(movie.rating)}</span>
					<span class="genre">{movie.genre}</span>
				</div>
				<p class="movie-review">{movie.review}</p>
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
	.icon { color: var(--peach); }
	.page-desc {
		color: var(--overlay1);
		font-size: 0.85rem;
		margin-bottom: 2rem;
	}

	.movie-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.movie-card {
		padding: 1rem;
		background: var(--bg-card);
		border: 1px solid var(--surface0);
		border-radius: 4px;
		transition: all 0.2s;
	}
	.movie-card:hover {
		border-color: var(--peach);
		box-shadow: 0 0 12px rgba(250, 179, 135, 0.12);
	}

	.movie-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 0.4rem;
	}
	.movie-title {
		font-family: var(--font-pixel);
		font-size: 0.65rem;
		color: var(--text);
	}
	.movie-year {
		color: var(--overlay0);
		font-size: 0.75rem;
	}

	.movie-rating {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}
	.stars {
		font-family: var(--font-pixel);
		font-size: 0.6rem;
		color: var(--peach);
		letter-spacing: 0.15em;
	}
	.genre {
		font-family: var(--font-pixel);
		font-size: 0.5rem;
		color: var(--overlay0);
		padding: 0.1em 0.4em;
		background: var(--surface0);
		border-radius: 2px;
	}

	.movie-review {
		color: var(--subtext0);
		font-size: 0.8rem;
		line-height: 1.6;
	}
</style>
