<script>
	import Card from '$lib/shared/Card.svelte';
	export let data;
	const { movies, page, prev, next } = data;
	console.log(page);
</script>

<div class="section">
	<div class="pages">
		<button class="prev" on:click>{prev}</button>
		<p>{page}</p>
		<button class="next" on:click>{next}</button>
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
