<script>
	import '../../src/app.css';
</script>

<navbar>
	<a href="/">Home</a>
	<a href="/Movies/popular" data-sveltekit-prefetch>Popular Movies</a>
	<a href="/Movies/Top_rated" data-sveltekit-prefetch>Top Rated Movies</a>
</navbar>
<slot />

<style>
	navbar {
		display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: center;
		background-color: rgba(238, 234, 234, 0.9); /* Black background color */
		/*position: fixed; /* Make it stick/fixed */
		top: 0; /* Stay on top */
		/*width: 100%; /* Full width */
		/*transition: top 0.3s; /* Transition effect when sliding down (and up) */
	}
	/* Style the navbar links */
	navbar a {
		font-size: 1.5rem;
		font-family: bold;

		/*float: left;
		display: block;*/
		color: #272727;
		text-align: center;
		padding: 2rem;
		margin-right: 1rem;
		text-decoration: none;
		font-family: cursive, poppins;
	}

	navbar a:hover {
		background-color: #ddd;
		color: black;
	}
</style>
