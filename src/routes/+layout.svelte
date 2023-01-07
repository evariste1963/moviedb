<script>
	import '../../src/app.css';
	import Header from '$lib/shared/Header.svelte';
	import Navbar from '$lib/shared/Navbar.svelte';
	import Footer from '$lib/shared/Footer.svelte';
</script>

<Header />
<div class="wrap">
	<div class="bodySection">
		<Navbar />
		<slot />
		<Footer />
	</div>
</div>

<style>
	.wrap {
		position: relative;
	}
	.wrap:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgb(212, 212, 168) url(../lib/images/hero.jpg) no-repeat;
		background-position: 0% 50%;
		background-size: cover;
		opacity: 0.2;
	}
	.bodySection {
		height: 100%;
		overflow: none;
		width: 80%;
		margin: 0 auto;
		/*border-left: 3px solid #373b44;
		border-right: 3px solid #373b44;*/
		position: relative;
	}
</style>
