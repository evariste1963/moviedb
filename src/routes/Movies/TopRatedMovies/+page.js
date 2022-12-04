let API_KEY = '0e04b7df85fdc659ca268b3647959793';
let page = 1;

export async function load({ fetch }) {
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr&page= ${page}`
	);
	let movieObj = await res.json();
	let movies = movieObj.results;
	page++;
	console.log(page);

	if (movies) {
		return {
			movies,
			page
		};
	}
}
