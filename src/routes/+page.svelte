<script>
	export let data;
	const { movies } = data;
	console.log(movies[0]);
</script>

<ul>
	{#each movies as movie}
		<img src={`https:/image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="movie.title" />
		<h3>{movie.title}</h3>
		<h5>{movie.overview}</h5>
		<h4>released: {movie.release_date}</h4>
		<br />
		<hr />
	{/each}
</ul>
