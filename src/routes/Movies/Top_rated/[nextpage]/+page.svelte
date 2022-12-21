<script>
	import MovieTemplate from '$lib/shared/MovieTemplate.svelte';
	export const csr = false;
	export let data;
</script>

<MovieTemplate {data} />
