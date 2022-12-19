<script>
	import Card from '$lib/shared/Card.svelte';
	import { page } from '$app/stores';

	export let data;
	const { movies, currentPage, pathname } = data;
</script>

<div class="section">
	<div class="pages">
		<a
			href={`/Movies/${pathname}/${currentPage - 1}`}
			target={currentPage < 3 ? '_self' : ''}
			data-sveltekit-preload-data
			class="prev">Prev</a
		>
		<p class="currentPage">{currentPage}</p>
		<a
			href={`/Movies/${pathname}/${currentPage + 1}`}
			target={currentPage < 3 ? '_self' : ''}
			data-sveltekit-preload-data
			class="next">Next</a
		>
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
	.section {
		margin: 0 1rem;
	}
	.pages {
		display: flex;
		/*margin-top: 4rem;*/
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.pages .prev,
	.pages .next {
		padding: 0.8rem;
		margin: 0 2rem;
		padding: 0;
		text-decoration: none;
		color: rgb(52, 50, 50);
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
