import AJAX from '../API.js';
let pathname = 'top_rated';
export let nextPage;
let currentPage = 1;
export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, currentPage);

	let movies = movieObj.results;
	//currentPage++;
	if (movies) {
		return {
			currentPage: movieObj.page,
			movies,
			pathname,
			nextPage
		};
	}
}
