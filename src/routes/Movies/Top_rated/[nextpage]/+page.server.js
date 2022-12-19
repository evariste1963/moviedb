import AJAX from '../../API.js';

export const csr = false;
export const ssr = true;
let pathname = 'top_rated';
export let pager;

export async function load({ fetch, params }) {
	let { nextpage } = params;
	const movieObj = await AJAX({ fetch }, pathname, pager);

	let movies = movieObj.results;
	pager = +nextpage;

	if (movies) {
		return {
			movies,
			nextpage,
			pager,
			pathname
		};
	}
}
