let API_KEY = '0e04b7df85fdc659ca268b3647959793';

export async function load({ fetch }) {
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
	);
	let trmovieObj = await res.json();
	let trmovies = trmovieObj.results;

	if (trmovies) {
		return {
			trmovies
		};
	}
}
