<script>
	import MovieTemplate from '../MovieTemplate.svelte';
	export let data;

	// const { movies } = data;
	const nextPage = () => {
		console.log('this is page:', data.next);
	};
</script>

<MovieTemplate {data} on:click={nextPage} />
