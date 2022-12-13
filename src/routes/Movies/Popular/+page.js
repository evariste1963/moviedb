import AJAX from '../API.js';
let pathname = 'popular';

let page = 5;
export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, page);

	let movies = movieObj.results;

	if (movies) {
		return {
			page: movieObj.page,
			movies
		};
	}
}
