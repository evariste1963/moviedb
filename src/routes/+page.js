export async function load({ fetch }) {
	let productsRes = await fetch('https://dummyjson.com/products?limit=10');
	let productData = await productsRes.json();
	let products = productData.products;

	let response = await fetch('https://jsonplaceholder.typicode.com/todos');
	let todos = await response.json();
	console.log(todos);

	console.log(products);
	return {
		products,
		todos
	};
}
