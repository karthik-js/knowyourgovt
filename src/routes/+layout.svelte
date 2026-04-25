<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	let navVariant = $derived(page.url.pathname === '/' ? 'home' as const : 'default' as const);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-[#fbf9f4] text-[#1b1c19] font-serif antialiased">
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer variant={navVariant} />
</div>
