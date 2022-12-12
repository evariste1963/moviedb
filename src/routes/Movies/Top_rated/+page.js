import API from '../API.js';
let pathname = 'top_rated';

let page = 6;
export async function load({ fetch }) {
	const movieObj = await API({ fetch }, pathname, page);

	let movies = movieObj.results;

	if (movies) {
		return {
			page: movieObj.page,
			movies
		};
	}
}
