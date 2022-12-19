//import AJAX from '../../API';
let API_KEY = '0e04b7df85fdc659ca268b3647959793';
export const csr = false;
//export const router = false;
export let pager;
// console.log('PPPPAGER', pager);
export async function load({ fetch, params }) {
	let { nextpage } = params;
	console.log('fetching?');
	//console.log('paramsid', params.nextpage, 'PARAMS', params);
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr&page=${nextpage}`
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
