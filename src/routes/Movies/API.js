let API_KEY = '0e04b7df85fdc659ca268b3647959793';
let pager = 1;
const AJAX = async function ({ fetch }, pathname, pager) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${pathname}?api_key=${API_KEY}&language=fr&page=${pager}`
	);
	let movieObj = await res.json();
	return movieObj;
};

export default AJAX;
