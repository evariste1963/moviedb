import AJAX from '../API.js';

export let nextPage;

let currentPage = 1;
let pathname = 'top_rated';

export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, currentPage);
	let movies = movieObj.results;

	if (movies) {
		return {
			currentPage: movieObj.page,
			movies,
			nextPage
		};
	}
}
