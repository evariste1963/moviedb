//import AJAX from '../../API';
let API_KEY = '0e04b7df85fdc659ca268b3647959793';

export async function load({ fetch, params }) {
	let { nextpage } = params;
	console.log('paramsid', params.nextpage);
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr&page=${nextpage}`
	);
	let results = await res.json();
	let movies = results.results;
	if (movies) {
		return {
			movies
		};
	}
}
