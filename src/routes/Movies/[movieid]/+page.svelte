<script>
	export let data;
	const { movie } = data;

	let year = movie.release_date.substr(0, 4);
	let picture = movie.backdrop_path;
	if (!movie.backdrop_path) {
		picture = movie.poster_path;
	}
</script>

<section class="page">
	<button class="button-89" on:click={() => history.back()}>BACK</button>
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

	/* button by Temani Afif --> with thanks */
	.button-89 {
		--b: 3px;
		--s: 0.45em;
		--color: #373b44;

		padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
		color: var(--color);
		--_p: var(--s);
		background: conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--color) 0)
			var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
			calc(100% - var(--b) - 2 * var(--_p));
		transition: 0.3s linear, color 0s, background-color 0s;
		outline: var(--b) solid #0000;
		outline-offset: 0.6em;
		font-size: 16px;
		cursor: pointer;
		border: 0;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button-89:hover,
	.button-89:focus-visible {
		--_p: 0px;
		outline-color: var(--color);
		outline-offset: 0.05em;
	}

	.button-89:active {
		background: var(--color);
		color: #fff;
	}
</style>
