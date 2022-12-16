<script>
	export let data;
	const { movie } = data;
	//console.log(movie);
	let year = movie.release_date.substr(0, 4);
	let picture = movie.backdrop_path;
	if (!movie.backdrop_path) {
		picture = movie.poster_path;
	}
</script>

<section class="page">
	<h1 class="heading">{movie.title}</h1>
	<h2 class="tagline">{movie.tagline}</h2>
	<h2>{year} - {movie.runtime} mins</h2>
	<div class="image">
		<img src={`https:/image.tmdb.org/t/p/original/${picture}`} alt={movie.title} />
	</div>
	<p class="overview">
		{movie.overview}
	</p>
</section>

<style>
	* {
		margin: 0.5rem;
	}
	section {
		margin-bottom: 2rem;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.page {
		width: 100%;
		height: fit-content;
		text-align: center;
		margin-top: 4rem;
	}

	.heading {
		font-size: 4rem;
	}

	.tagline {
		font-style: italic;
	}
	.image {
		width: 100%;
		height: auto;
		align-items: center;
		object-fit: cover;
		text-align: center;
	}

	img {
		width: 80%;
		height: auto;
		margin-left: auto;
		margin-right: auto;
	}

	.overview {
		text-align: justify;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
	}
</style>
