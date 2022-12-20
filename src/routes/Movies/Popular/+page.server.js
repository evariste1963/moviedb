import AJAX from '../API.js';

let pathname = 'popular';
let currentPage = 1;

export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, currentPage);
	let movies = movieObj.results;

	if (movies) {
		return {
			currentPage: movieObj.page,
			movies,
			pathname
		};
	}
}
