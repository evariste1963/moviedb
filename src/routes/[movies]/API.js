import { SECRET_API_KEY } from '$env/static/private';

const AJAX = async function ({ fetch }, pathname, currentPage = 1) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${pathname}?api_key=${SECRET_API_KEY}&language=fr&page=${currentPage}&nclude_adult=true`
	);
	let movieObj = await res.json();
	return movieObj;
};

export default AJAX;
