<script>
	import Card from '$lib/shared/Card.svelte';

	export let data;

	const { movies, currentPage } = data;
</script>

<div class="section">
	<div class="pages">
		<div class="movie-bar">
			<button class="button-89" on:click={() => history.back()}>BACK</button>
		</div>
	</div>
	<ul>
		{#each movies as movie}
			<Card>
				<a href={`/Movies/${movie.id}`} data-sveltekit-preload-data>
					<img src={`https:/image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
				</a>
				<h3>{movie.title}</h3>
				<h4>{movie.release_date}</h4>
			</Card>
		{/each}
	</ul>
</div>

<style>
	.pages {
		width: 100%;
		display: flex;
		margin: 0.5rem auto;
		color: #000;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.movie-bar {
		display: flex;
		margin: 0 0 0 auto;
		align-items: center;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		color: rgb(51, 50, 50);
		padding: 0;
	}

	h3 {
		font-size: 0.9rem;
	}
	h4 {
		font-size: 0.7rem;
	}

	img {
		width: 100%;
		height: auto;
		object-fit: scale-down;
		border-radius: 1rem;
		transition: all 0.2s ease-in-out;
	}
	img:hover {
		transform: scale(1.1);
	}
</style>
