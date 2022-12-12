import API from '../API.js';
let pathname = 'popular';

let page = 5;
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
