<script>
	import { page } from '$app/stores';
	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'Popular', path: '/movies/popular' },
		{ title: 'Top Rated', path: '/movies/top_rated' }
	];
</script>

<navbar>
	{#each nav as navitem}
		{#if navitem.title !== 'Home'}
			<a
				href={navitem.path}
				class:selected={$page.route.id.includes(navitem.path.slice(-5))}
				class="button-89"
				data-sveltekit-preload-data>{navitem.title}</a
			>
		{:else}
			<a href={navitem.path} class="button-89" data-sveltekit-preload-data>{navitem.title} </a>
		{/if}
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
		font-size: 2rem !important;
		font-weight: bold;
		width: 15rem;

		text-align: center;
		padding: 2rem;
		margin: 1rem;
		text-decoration: none;
	}

	.selected {
		color: rgb(112, 14, 14) !important;
	}
</style>
