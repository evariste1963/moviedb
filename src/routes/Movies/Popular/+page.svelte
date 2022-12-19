<script>
	import MovieTemplate from '../MovieTemplate.svelte';

	// import { page } from '$app/stores';
	// //import AJAX from '../API';

	export let data;
	console.log('page...', data.pager, 'datatata..', data);
	//let { pathname, pager } = data;

	// create page & prev next functions here? __ or on +page.js??

	/*	let urlref =
			'https://api.themoviedb.org/3/movie' +
			$page.url.pathname.slice(7).toLowerCase() +
			'?api_key=0e04b7df85fdc659ca268b3647959793&language=fr&page=' +
			(pager + 4);

		const res = await fetch(urlref);
		console.log('this is the res', urlref, res);
		let results = await res.json();
		let data = results.results;
		pager++;
		console.log('this is the data', data);

		if (data) {
			return {
				data
			};
		}*/
</script>

<!-- {#key value}
<MovieTemplate {data} on:click={nextPage} />
{/key} -->

<MovieTemplate {data} />
