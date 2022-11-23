<script>
	import Card from '../../lib/shared/Card.svelte';
	export let movies;
</script>

<ul>
	{#each movies as movie}
		<Card>
			<img src={`https:/image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
			<h3>{movie.title}</h3>

			<h4>{movie.release_date}</h4>
		</Card>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	img {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 1rem;
	}
</style>
