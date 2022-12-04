<script>
	import Card from '$lib/shared/Card.svelte';
	export let data;
	const { movies, page } = data;
	console.log(page);
</script>

<div class="section">
	<div class="pages">
		<a href="/Movies/TopRatedMovies" data-sveltekit-prefetch> prev - </a>
		<a href="/Movies/PopularMovies" data-sveltekit-prefetch> - next </a>
	</div>
	<ul>
		{#each movies as movie}
			<Card>
				<a href={`/Movies/${movie.id}`}>
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
		margin-top: 4rem;
		text-align: center;
	}

	.pages a {
		text-decoration: none;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		color: rgb(51, 50, 50);
		font-family: cursive;
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
