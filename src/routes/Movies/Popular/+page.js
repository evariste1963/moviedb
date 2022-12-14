import AJAX from '../API.js';
let pathname = 'popular';

let pager;
export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, pager);

	let movies = movieObj.results;

	if (movies) {
		return {
			pager: movieObj.page,
			movies,
			pathname
		};
	}
}
