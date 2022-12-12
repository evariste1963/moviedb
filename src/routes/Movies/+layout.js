let API_KEY = '0e04b7df85fdc659ca268b3647959793';

let pathname = 'popular';

export async function load({ fetch }) {
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/${pathname}?api_key=${API_KEY}&language=fr&page=7`
	);
	let movieObj = await res.json();
	let movies = movieObj.results;
	console.log(movieObj, movieObj.page);

	if (movies) {
		return {
			page: movieObj.page,
			movies
		};
	}
}
