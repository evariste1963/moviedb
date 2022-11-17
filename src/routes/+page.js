export async function load({ fetch }) {
	let productsRes = await fetch('https://dummyjson.com/products?limit=10');
	let productData = await productsRes.json();
	let products = productData.products;

	console.log(products);
	return {
		products
	};
}
