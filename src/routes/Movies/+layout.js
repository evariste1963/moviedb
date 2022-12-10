let API_KEY = '0e04b7df85fdc659ca268b3647959793';
console.log('move api call to here????');

export let search;

export async function load({ fetch }) {
	// console.log(params);
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
