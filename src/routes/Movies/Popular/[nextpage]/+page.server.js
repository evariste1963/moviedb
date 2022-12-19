import AJAX from '../../API.js';

export const csr = false;
export const ssr = true;
export let currentPage;

let pathname = 'popular';

export async function load({ fetch, params }) {
	let { nextpage } = params;
	const movieObj = await AJAX({ fetch }, pathname, currentPage);

	let movies = movieObj.results;
	currentPage = +nextpage;

	if (movies) {
		return {
			movies,
			nextpage,
			currentPage,
			pathname
		};
	}
}
