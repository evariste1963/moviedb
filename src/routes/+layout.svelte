<nav>
	<button><a href="/">Home</a></button>
	<button><a href="/Movies/PopularMovies ">Popular Movies</a></button>
	<button><a href="/Movies/TopRatedMovies ">Top Rated Movies</a></button>
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
