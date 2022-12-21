import AJAX from '../API.js';

export async function load({ fetch, params }) {
	let pathname = params.movieid;
	let movie = await AJAX({ fetch }, pathname);

	if (movie) {
		return {
			movie
		};
	}
}
