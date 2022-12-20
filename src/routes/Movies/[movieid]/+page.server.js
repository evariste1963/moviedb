//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=fr

let API_KEY = '0e04b7df85fdc659ca268b3647959793';

export async function load({ fetch, params }) {
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.movieid}?api_key=${API_KEY}&language=fr&page=1`
	);
	let movie = await res.json();

	if (movie) {
		return {
			movie
		};
	}
}
