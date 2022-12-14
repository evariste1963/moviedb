<script>
	import Card from '$lib/shared/Card.svelte';
	import { page } from '$app/stores';
	export let data;
	const { movies, pager } = data;
	// let urlref =
	// 	'https://api.themoviedb.org/3/movie' +
	// 	$page.url.pathname.slice(7) +
	// 	'?api_key=0e04b7df85fdc659ca268b3647959793&language=fr&page=' +
	// 	(pager + 4);

	//let prev = pager - 1;
	//let next = pager + 1;
	console.log(movies, pager, $page.url.pathname.slice(7), '--data->', data);
</script>

<!--below will not work because it's not the same as the movie links as these have already been downloaded from the nav liks -- new fetch is required!! maybe create a new page(s) for prev and next fetches and call them frrom the a refs bvelow-->
<div class="section">
	<div class="pages">
		<!--<button on:click>NEXT</button> -->
		<a href={$page.url.pathname} target="_self" data-sveltekit-prefetch class="prev">Prev</a>
		<p>{pager}</p>
		<a href={$page.url.pathname} data-sveltekit-prefetch class="next" on:click>Next</a>
	</div>
	<ul>
		{#each movies as movie}
			<Card>
				<a href={`/Movies/${movie.id}`}>
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
		display: flex;
		margin-top: 4rem;
		text-align: center;
		justify-content: center;
	}

	.pages .prev,
	.pages .next {
		padding: 0.8rem;
		margin: 0 2rem;
	}
	.prev {
		border-radius: 50% 0 0 50%;
	}

	.next {
		border-radius: 0 50% 50% 0;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		color: rgb(51, 50, 50);
		font-family: cursive;
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
