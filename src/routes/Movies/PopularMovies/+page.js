let API_KEY = '0e04b7df85fdc659ca268b3647959793';

export async function load({ fetch }) {
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr&page=1`
	);
	let movieObj = await res.json();
	let movies = movieObj.results;
	console.log(movies);
	if (movies) {
		return {
			movies
		};
	}
}
