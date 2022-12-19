<script>
	import MovieTemplate from '../../MovieTemplate.svelte';

	export let data;
	data.nextpage++;

	console.log('kkkkk', data.nextpage);
</script>

<MovieTemplate {data} />
