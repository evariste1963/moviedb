import AJAX from '../API.js';
let pathname = 'popular';
//export let nextPage;
let currentPage = 1;
export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, currentPage);
	console.log(currentPage);
	let movies = movieObj.results;
	//currentPage++;
	if (movies) {
		return {
			currentPage: movieObj.page,
			movies,
			pathname
		};
	}
}
