<script>
	import Card from '$lib/shared/Card.svelte';
	import { page } from '$app/stores';

	export let data;

	const { movies, currentPage } = data;
	let pathRoute = `/${$page.url.pathname.split('/')[1]}/${$page.url.pathname.split('/')[2]}`;
</script>

<div class="section">
	<div class="pages">
		<form class="searchbar">
			<input type="search" placeholder="search for movie" name="search" /><button type="submit"
				>Search</button
			>
		</form>
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
	/* .section {
		margin: 0 1rem;
	} */
	.pages {
		width: 100%;
		display: flex;
		margin: 0.5rem auto;
		color: #000;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.searchbar {
		margin-left: 4em;
	}

	.searchbar input,
	.searchbar button {
		--b: 3px;
		--s: 0.45em;
		--color: #2b2f36;
		margin-right: 0.5rem;
		text-decoration: none;
		padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
		--_p: var(--s);
		background: conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--color) 0)
			var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
			calc(100% - var(--b) - 2 * var(--_p));
		transition: 0.3s linear, color 0s, background-color 0s;
		outline: var(--b) solid rgba(0, 0, 0, 0);
		outline-offset: 0.6em;
		font-size: 16px;
		cursor: pointer;
		border: 0;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.searchbar input:hover,
	.searchbar input:focus,
	.searchbar button:hover,
	.searchbar button:focus-visible {
		--_p: 0px;
		outline-color: var(--color);
		outline-offset: 0.05em;
	}

	.searchbar button:active {
		background: var(--color);
		color: #fff;
	}

	.movie-bar {
		display: flex;
		margin: 0 0 0 auto;
		align-items: center;
	}

	.pageLinkIdle {
		padding: 0.8rem;
		margin: 0 2rem;
		padding: 0;
		text-decoration: none;
		color: rgb(168, 164, 164);
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
