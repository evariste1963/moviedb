import AJAX from '../API.js';

let pathname = 'popular';
export let nextPage;

let pager = 24;
export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, pager + 1);

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
