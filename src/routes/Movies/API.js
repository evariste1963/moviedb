let API_KEY = '0e04b7df85fdc659ca268b3647959793';
let page = 1;
const AJAX = async function ({ fetch }, pathname, page) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${pathname}?api_key=${API_KEY}&language=fr&page=${page}`
	);
	let movieObj = await res.json();
	return movieObj;
};

export default AJAX;
