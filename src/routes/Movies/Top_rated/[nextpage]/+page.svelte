<script>
	import MovieTemplate from '../../MovieTemplate.svelte';
	export const csr = false;
	export let data;
	
</script>

<MovieTemplate {data} />
