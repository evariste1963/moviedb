<script>
	import MovieTemplate from '../MovieTemplate.svelte';
	export let data;

	// const { movies } = data;
	const nextPage = () => {
		console.log('the next page is:', data.page + 1);
	};
</script>

<MovieTemplate {data} on:click={nextPage} />
