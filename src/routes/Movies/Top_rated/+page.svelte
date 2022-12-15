<script>
	import MovieTemplate from '../MovieTemplate.svelte';
	//import AJAX from '../API';
	export let data;
	const { pathname, pager } = data;
	/*const nextPage = () => {
		console.log('the next page is:', pager + 1);
	};*/
</script>

<MovieTemplate {data} />
