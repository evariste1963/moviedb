<script>
	import MovieTemplate from '../MovieTemplate.svelte';
	//import AJAX from '../API';
	export let data;
	const { pathname, pager } = data;

	// create page prev & next functions here? __ or on +page.js??
	/*const nextPage = async () => {
		console.log('the next page is:', page + 1);
		const movieObj = await API({ fetch }, pathname, page + 1);

		let movies = movieObj.results;

		if (movies) {
			return {
				nextPage,
				page: movieObj.page,
				movies
			};
		}
	};*/
</script>

<MovieTemplate {data} />
