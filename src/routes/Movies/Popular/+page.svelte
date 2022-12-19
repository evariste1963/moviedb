<script>
	import MovieTemplate from '../MovieTemplate.svelte';

	export let data;

	console.log('page...', data.pager, 'datatata..', data);
</script>

<MovieTemplate {data} />
