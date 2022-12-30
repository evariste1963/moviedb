import { SECRET_API_KEY } from '$env/static/private';


export async function load({ fetch, params }) {
	let { search } = params;

	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${SECRET_API_KEY}&language=fr&query=${search}&page=1&nclude_adult=true`
	);

	let movieObj = await res.json();
	let movies = movieObj.results;

	if (movies) {
		return {
			movies
		};
	}
}
