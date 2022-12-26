<script>
	import MovieTemplate from '$lib/components/MovieTemplate.svelte';
	export const csr = false;
	export let data;
	data.nextpage++;
</script>

<MovieTemplate {data} />
