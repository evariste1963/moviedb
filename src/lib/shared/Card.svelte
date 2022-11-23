<div class="card">
	<slot />
</div>

<style>
	.card {
		margin: 10px 5px;
		background: rgb(199, 196, 196);
		padding: 15px 15px 0px 15px;
		border-radius: 1rem;
		box-shadow: 2px 4px rgba(0, 0, 0, 0.4);
		transition: all 0.2s ease-in-out;
	}

	.card:hover {
		transform: scale(1.05);
	}
</style>
