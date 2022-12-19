<script>
	import MovieTemplate from '../../MovieTemplate.svelte';
	export const csr = false;
	export let data;
	data.nextpage++;

	console.log('NEXT PAGE', data.nextpage, 'movies', data.movies, 'pager', data.pager);
</script>

<MovieTemplate {data} />
