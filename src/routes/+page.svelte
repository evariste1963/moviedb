<script>
	export let data;
	const { products, todos } = data;
</script>

<ul>
	{#each products as product}
		<h2>{product.title}</h2>
		<h4>{product.description}</h4>
		<h3>£ {product.price}</h3>
	{/each}
</ul>

<ul>
	{#each todos as todo}
		<h2>{todo.title}</h2>
		<h4>{todo.completed}</h4>
	{/each}
</ul>
