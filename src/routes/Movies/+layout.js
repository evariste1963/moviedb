let API_KEY = '0e04b7df85fdc659ca268b3647959793';
// import { page } from '$app/stores';
// import { getStores } from '$app/stores';

// const { page } = getStores();

let pathname = 'popular';

// function start_subscribing() {
// 	page.subscribe(($page) => {
// 		let pathname = $page.url.pathname;

// 		return pathname;
// 	});
// }
//console.log(start_subscribing(), pathname);
//let thisPage = 'popular';
//page.subscribe();
//thisPage = page.subscribe((currentPage) => currentPage);

export async function load({ fetch }) {
	// start_subscribing();
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/${pathname}?api_key=${API_KEY}&language=fr&page=1`
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
