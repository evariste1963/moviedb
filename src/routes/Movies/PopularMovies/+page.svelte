<script>
	import MovieTemplate from '../MovieTemplate.svelte';
	export let data;
	const { movies, page, prev, next } = data;
	console.log(page, prev, next);
</script>

<MovieTemplate {data} />
