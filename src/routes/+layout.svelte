<nav>
	<a href="/">Home</a>
	<a href="/Movies/PopularMovies" data-sveltekit-prefetch>Popular Movies</a>
	<a href="/Movies/TopRatedMovies" data-sveltekit-prefetch>Top Rated Movies</a>
</nav>
<slot />

<style>
	nav {
		display: flex;
	}
	a {
		font-family: cursive;
		margin: 20px;
		padding: 10px;
		border-radius: 10%;
		background-color: rgb(243, 240, 240);
		text-decoration: none;
	}
</style>
