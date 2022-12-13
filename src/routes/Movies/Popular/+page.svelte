<script>
	import MovieTemplate from '../MovieTemplate.svelte';
	export let data;
	const { movies } = data;

	// create page & prev next functions here? __ or on +page.js??
	const nextPage = () => {
		console.log('the next page is:', data.page + 1);
	};
</script>

<MovieTemplate {data} />
