<nav>
	<button><a href="/">Home</a></button>
	<button><a href="/Movies/PopularMovies" data-sveltekit-prefetch>Popular Movies</a></button>
	<button><a href="/Movies/TopRatedMovies" data-sveltekit-prefetch>Top Rated Movies</a></button>
</nav>
<slot />

<style>
	nav {
		display: flex;
	}
	button {
		margin: 20px;
		padding: 10px;
		border-radius: 10%;
	}
</style>
