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
			data-sveltekit-preload-data>{navitem.title}</a
		>
	{/each}
</navbar>
<slot />

<style>
	navbar {
		display: flex;
		min-height: 4vh;
		justify-content: center;
		top: 0; /* Stay on top */
	}

	navbar a {
		font-size: 1.5rem;
		font-weight: bold;
		width: 10rem;
		color: #4f4343;
		text-align: center;
		padding: 2rem;
		margin: 1rem;
		text-decoration: none;
	}

	navbar a:hover {
		background-color: rgba(143, 96, 96, 0.2);
		color: black;
	}
	.active {
		color: rgb(80, 15, 15);
		text-decoration: none;
		border: 1px solid rgb(80, 15, 15);
	}
</style>
