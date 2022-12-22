<script>
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
			class:selected={$page.route.id.includes(navitem.title.slice(-5).toLowerCase())}
			class="button-89"
			data-sveltekit-preload-data>{navitem.title}</a
		>
	{/each}
</navbar>

<style>
	navbar {
		display: flex;
		min-height: 4vh;
		justify-content: center;
		top: 0; /* Stay at top */
	}

	navbar a {
		font-size: 2rem;
		font-weight: bold;
		width: 15rem;
		color: #4f4343;
		text-align: center;
		padding: 2rem;
		margin: 1rem;
		text-decoration: none;
	}

	.selected {
		color: rgb(80, 15, 15);
		text-decoration: none;
	}
</style>
