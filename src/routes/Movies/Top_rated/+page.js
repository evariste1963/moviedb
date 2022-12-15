import AJAX from '../API.js';
let pathname = 'top_rated';
export let nextPage;
let pager = 25;
export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, pager);

	let movies = movieObj.results;

	if (movies) {
		return {
			pager: movieObj.page,
			movies,
			pathname,
			nextPage
		};
	}
}
