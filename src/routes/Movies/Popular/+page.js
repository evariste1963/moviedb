import AJAX from '../API.js';
export const csr = false;
let pathname = 'popular';

let pager = 1;

export async function load({ fetch }) {
	const movieObj = await AJAX({ fetch }, pathname, pager);

	let movies = movieObj.results;

	if (movies) {
		return {
			pager: movieObj.page,
			movies,
			pathname
		};
	}
}

//create page & prev next functions here? __ or on +page.js??
// export async function nextPage() {
// 	console.log('the next page is:', pager + 1);
// 	let urlref =
// 		'https://api.themoviedb.org/3/movie' +
// 		$page.url.pathname.slice(7).toLowerCase() +
// 		'?api_key=0e04b7df85fdc659ca268b3647959793&language=fr&page=' +
// 		(pager + 4);

// 	const res = await fetch(urlref);
// 	console.log('this is the res', urlref, res);
// 	let data = await res.json();
// 	pager++;
// 	console.log(data);

// 	//return data;
// 	if (data) {
// 		return {
// 			data,
// 			pathname
// 		};
// 	}
// }
