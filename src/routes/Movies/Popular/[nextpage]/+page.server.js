//import AJAX from '../../API';
/*let API_KEY = '0e04b7df85fdc659ca268b3647959793';
export const csr = false;
export let pager;
let pathname = 'popular';

export async function load({ fetch, params }) {
	let { nextpage } = params;
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/${pathname}?api_key=${API_KEY}&language=fr&page=${pager}`
	);
	let results = await res.json();
	let movies = results.results;
	pager = +nextpage;

	if (movies) {
		return {
			movies,
			nextpage,
			pager
		};
	}
}
*/
import AJAX from '../../API.js';

export const csr = false;
export const ssr = true;
let pathname = 'popular';
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
