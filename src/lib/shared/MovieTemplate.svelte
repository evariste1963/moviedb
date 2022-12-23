<script>
	import Card from '$lib/shared/Card.svelte';
	import { page } from '$app/stores';
	import SearchMovies from '$lib/shared/SearchMovies.svelte';
	export let data;

	const { movies, currentPage } = data;
	let pathRoute = `/${$page.url.pathname.split('/')[1]}/${$page.url.pathname.split('/')[2]}`;
</script>

<div class="section">
	<div class="pages">
		<div class="movie-bar">
			{#if currentPage > 1}
				<a
					href={`${pathRoute}/${currentPage - 1}`}
					target={currentPage < 3 ? '_self' : ''}
					data-sveltekit-preload-data
					class="button-89">Prev</a
				>
			{:else}
				<p class="pageLinkIdle">Prev</p>
			{/if}
			<p class="currentPage">{currentPage}</p>
			{#if currentPage == undefined || currentPage < 500}
				<a
					href={`${pathRoute}/${currentPage + 1}`}
					target={currentPage < 3 ? '_self' : ''}
					data-sveltekit-preload-data
					class="button-89">Next</a
				>
			{:else}
				<p class="pageLinkIdle">Next</p>
			{/if}
		</div>
	</div>
	<ul>
		{#each movies as movie}
			<Card>
				<a href={`/Movies/${movie.id}`} data-sveltekit-preload-data>
					<img src={`https:/image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
				</a>
				<h3>{movie.title}</h3>
				<h4>{movie.release_date}</h4>
			</Card>
		{/each}
	</ul>
</div>

<style>
	.pages {
		width: 100%;
		display: flex;
		margin: 0.5rem auto;
		color: #000;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
	.movie-bar {
		display: flex;
		margin: 0 auto;
		align-items: center;
	}

	.pageLinkIdle {
		padding: 0.8rem;
		margin: 0 2rem;
		padding: 0;
		text-decoration: none;
		color: rgb(168, 164, 164);
	}

	.button-89 {
		color: black !important;
	}

	.currentPage {
		font-size: 3rem;
		margin: 0;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		color: rgb(51, 50, 50);
		padding: 0;
	}

	h3 {
		font-size: 0.9rem;
	}
	h4 {
		font-size: 0.7rem;
	}

	img {
		width: 100%;
		height: auto;
		object-fit: scale-down;
		border-radius: 1rem;
		transition: all 0.2s ease-in-out;
	}
	img:hover {
		transform: scale(1.1);
	}
</style>
