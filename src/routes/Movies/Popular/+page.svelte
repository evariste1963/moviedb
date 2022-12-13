<script>
	import MovieTemplate from '../MovieTemplate.svelte';
	import AJAX from '../API';
	export let data;

	const { pathname, pager } = data;

	// create page & prev next functions here? __ or on +page.js??
export async function nextPage() {
	console.log('the next page is:', pager + 1);
	
}
</script>

<MovieTemplate {data} on:click={nextPage} />
