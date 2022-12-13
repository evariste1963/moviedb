import AJAX from '../API.js';
let pathname = 'popular';
export let nextPage;

let page = 4;
export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, page);

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
