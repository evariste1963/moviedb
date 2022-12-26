<!-- https://developers.themoviedb.org/3/movies/get-top-rated-movies-->
<script>
	import SearchMovies from '$lib/components/SearchMovies.svelte';
</script>

<section>
	<h1 class="homepage-title">Welcome to Moviedb, search movies here</h1>
	<SearchMovies />
	<div class="hero" />
</section>

<style>
	section {
		margin: 0 2rem;
		text-align: center;
	}

	.homepage-title {
		font-size: 4rem;
	}

	.hero {
		height: 50vh;
	}
</style>
