<script>
	import '../../src/app.css';
	import Header from '$lib/shared/Header.svelte';
	import Navbar from '$lib/shared/Navbar.svelte';
	import Footer from '$lib/shared/Footer.svelte';
</script>

<Header />
<div class="bodySection">
	<Navbar />
	<slot />
	<Footer />
</div>

<style>
	.bodySection {
		width: 80%;
		margin: 0 auto;
		border-left: 3px solid #373b44;
		border-right: 3px solid #373b44;
	}
</style>
