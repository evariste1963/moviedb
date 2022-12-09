let API_KEY = '0e04b7df85fdc659ca268b3647959793';
let page = 1;
let prev = 0;
let next = 2;

export async function load({ fetch }) {
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr&page=${page}`
	);
	let movieObj = await res.json();
	let movies = movieObj.results;
	page++;
	prev = page - 1;
	next = page + 1;

	if (movies) {
		return {
			movies,
			page,
			prev,
			next
		};
	}
}
