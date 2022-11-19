<script>
	import Card from '../lib/shared/Card.svelte';
	export let data;
	const { movies } = data;
	console.log(movies[0]);
</script>

<ul>
	{#each movies as movie}
		<Card>
			<img src={`https:/image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie.title" />
			<h3>{movie.title}</h3>
			<p>{movie.overview}</p>
			<h4>released: {movie.release_date}</h4>
		</Card>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: auto auto auto;
	}

	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
</style>
