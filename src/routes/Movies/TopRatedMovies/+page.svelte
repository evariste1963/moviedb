<script>
	import Card from '../../../lib/shared/Card.svelte';
	export let data;
	const { trmovies } = data;
	console.log(trmovies[0]);
</script>

<ul>
	{#each trmovies as trmovie}
		<Card>
			<img src={`https:/image.tmdb.org/t/p/w300/${trmovie.poster_path}`} alt="movie.title" />
			<h3>{trmovie.title}</h3>
			<p>{trmovie.overview}</p>
			<h4>released: {trmovie.release_date}</h4>
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
