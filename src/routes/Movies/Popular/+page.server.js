import AJAX from '../API.js';

let pathname = 'popular';
let pager = 1;

export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, pager);

	let movies = movieObj.results;

	if (movies) {
		return {
			pager,
			movies,
			pathname
		};
	}
}
