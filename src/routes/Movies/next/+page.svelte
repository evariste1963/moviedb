<script>
	import MovieTemplate from '../MovieTemplate.svelte';
	export let data;
	const { pager } = data;
	const nextPage = () => {
		console.log('the next page is:', pager + 1);
	};
</script>

<MovieTemplate {data} on:click={nextPage} />
