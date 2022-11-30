<script>
	export let data;
	const { movie } = data;
	console.log(movie);
	let year = movie.release_date.substr(0, 4);
</script>

<section class="page">
	<h1 class="heading">{movie.title}</h1>
	<h2 class="tagline">{movie.tagline}</h2>
	<h2>{year} - {movie.runtime} mins</h2>
	<div class="image">
		<img src={`https:/image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
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
		font-family: cursive;
		margin-bottom: 2rem;
	}
	.page {
		width: 90%;
		height: fit-content;
		text-align: center;
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
