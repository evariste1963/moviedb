<script>
	import MovieTemplate from '../../MovieTemplate.svelte';
	export const csr = false;
	export let data;
	data.nextpage++;

	
</script>

<MovieTemplate {data} />
