<script>
	import { goto } from '$app/navigation';

	export let inputValue = '';

	function submitSearch() {
		goto('/' + inputValue);
	}
</script>

<form on:submit|preventDefault={submitSearch} class="searchbar">
	<input
		class="searchbar"
		for="search"
		type="search"
		placeholder="search for movie"
		name="search"
		bind:value={inputValue}
	/>
	<button type="submit" on:submit{submitSearch}>Search</button>
</form>

<style>
	.searchbar {
		margin-left: 4em;
	}

	.searchbar input,
	.searchbar button {
		--b: 3px;
		--s: 0.45em;
		--color: #2b2f36;
		margin-right: 0.5rem;
		text-decoration: none;
		padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
		--_p: var(--s);
		background: conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--color) 0)
			var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
			calc(100% - var(--b) - 2 * var(--_p));
		transition: 0.3s linear, color 0s, background-color 0s;
		outline: var(--b) solid rgba(0, 0, 0, 0);
		outline-offset: 0.6em;
		font-size: 16px;
		cursor: pointer;
		border: 0;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.searchbar input:hover,
	.searchbar input:focus,
	.searchbar button:hover,
	.searchbar button:focus-visible {
		--_p: 0px;
		outline-color: var(--color);
		outline-offset: 0.05em;
	}

	.searchbar button:active {
		background: var(--color);
		color: #fff;
	}
</style>
