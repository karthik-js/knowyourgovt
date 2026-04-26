<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page, navigating } from '$app/state';

	let { children } = $props();

	let hideFooter = $derived(page.url.pathname.startsWith('/go-directory/') && page.url.pathname !== '/go-directory/');
	let isNavigating = $derived(!!navigating.to);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-background text-on-surface font-sans antialiased">
	{#if isNavigating}
		<div class="fixed inset-x-0 top-0 z-50 h-2 bg-primary/10">
			<div class="nav-progress h-full bg-secondary-container"></div>
		</div>
	{/if}
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	{#if !hideFooter}
		<Footer />
	{/if}
</div>
