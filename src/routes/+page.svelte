<script>
	export let data;
	const { products } = data;
</script>

<ul>
	{#each products as product}
		<h2>{product.title}</h2>
		<h4>{product.description}</h4>
		<h3>£ {product.price}</h3>
	{/each}
</ul>
