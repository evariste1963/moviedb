<script>
	import '../../src/app.css';
	import { page } from '$app/stores';

	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'Popular', path: '/Movies/popular' },
		{ title: 'Top Rated', path: '/Movies/top_rated' }
	];
</script>

<navbar>
	{#each nav as navitem}
		<a
			href={navitem.path}
			class:active={$page.route.id === navitem.path}
			class="button-89"
			data-sveltekit-preload-data>{navitem.title}</a
		>
	{/each}
</navbar>
<slot />
<footer>
	<div class="myTag">
		<p class="footer button-89">coded by <span class="this-me">this.me</span></p>
	</div>
</footer>

<style>
	navbar {
		display: flex;
		min-height: 4vh;
		justify-content: center;
		top: 0; /* Stay on top */
	}

	navbar a {
		font-size: 2rem;
		font-weight: bold;
		width: 15rem;
		/* color: #4f4343; */
		text-align: center;
		padding: 2rem;
		margin: 1rem;
		text-decoration: none;
	}

	/* navbar a:hover {
		background-color: rgba(143, 96, 96, 0.2);
		color: black;
	} */
	.active {
		color: rgb(80, 15, 15);
		text-decoration: none;
		/*border: 1px solid rgb(80, 15, 15);*/
	}

	footer {
		/*position: fixed;*/
		margin: 1rem auto;
		bottom: 1rem;
		width: 80%;
		text-align: center;
		color: black;
		font-weight: bolder;
		font-style: italic;
		font-family: Ink free, cursive, sans-serif;
	}
	.myTag {
		width: 50%;
		margin: 0 auto;
	}

	.this-me {
		color: rgb(46, 10, 80);
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
