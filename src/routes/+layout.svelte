<navbar>
	<a href="/">Home</a>
	<a href="/Movies/PopularMovies" data-sveltekit-prefetch>Popular Movies</a>
	<a href="/Movies/TopRatedMovies" data-sveltekit-prefetch>Top Rated Movies</a>
</navbar>
<slot />

<style>
	navbar {
		background-color: rgba(250, 250, 250, 0.9); /* Black background color */
		position: fixed; /* Make it stick/fixed */
		top: 0; /* Stay on top */
		width: 60%; /* Full width */
		transition: top 0.3s; /* Transition effect when sliding down (and up) */
	}
	/* Style the navbar links */
	navbar a {
		float: left;
		display: block;
		color: #272727;
		text-align: center;
		padding: 15px;
		text-decoration: none;
		font-family: cursive;
	}

	navbar a:hover {
		background-color: #ddd;
		color: black;
	}
</style>
