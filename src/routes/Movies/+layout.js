import API from './API.js';
//let API_KEY = '0e04b7df85fdc659ca268b3647959793';
//console.log(API());
let pathname = 'popular';

//let url = 'https://api.themoviedb.org/3/movie/';
let page = 1;
export async function load({ fetch }) {
	const movieObj = await API({ fetch });
	// await fetch(
	// 	`https://api.themoviedb.org/3/movie/${pathname}?api_key=${API_KEY}&language=fr&page=7`
	// );
	//let movieObj = await res.json();
	let movies = movieObj.results;
	//console.log('movie object:', movieObj, 'movie page =', movieObj.page);

	if (movies) {
		return {
			page: movieObj.page,
			movies
		};
	}
}
