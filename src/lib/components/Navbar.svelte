<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let isGoDirectory = $derived(page.url.pathname.startsWith('/go-directory'));
	let isHome = $derived(page.url.pathname === '/');
	let menuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
	<nav class="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-8">
		<div class="flex items-center gap-8">
			<a href={resolve('/')} class="font-serif text-xl font-bold text-[#004B87]">
				Know Your Government
			</a>
			<div class="hidden items-center gap-6 md:flex">
				<a
					href={resolve('/')}
					class="font-sans text-sm font-medium text-slate-600 transition-colors hover:text-[#004B87]"
					class:font-semibold={isHome}
					class:text-[#004B87]={isHome}
				>
					Home
				</a>
				<a
					href={resolve('/go-directory')}
					class="font-sans text-sm font-medium text-slate-600 transition-colors hover:text-[#004B87]"
					class:font-semibold={isGoDirectory}
					class:text-[#004B87]={isGoDirectory}
					class:border-b-2={isGoDirectory}
					class:border-[#004B87]={isGoDirectory}
					class:pb-1={isGoDirectory}
				>
					GO Directory
				</a>
			</div>
		</div>
		<button
			class="rounded p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary md:hidden"
			onclick={() => menuOpen = true}
			aria-label="Open menu"
		>
			<span class="material-symbols-outlined">menu</span>
		</button>
	</nav>
</header>

<!-- Mobile Sidebar Overlay -->
{#if menuOpen}
	<div class="fixed inset-0 z-[70] bg-black/40 md:hidden" onclick={() => menuOpen = false} role="presentation"></div>
{/if}
<div
	class="fixed top-0 right-0 z-[80] flex h-full w-[280px] max-w-[80vw] transform flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden"
	class:translate-x-0={menuOpen}
	class:translate-x-full={!menuOpen}
>
	<div class="flex items-center justify-between border-b border-slate-200 px-5 py-4">
		<span class="font-serif text-lg font-bold text-[#004B87]">Menu</span>
		<button onclick={() => menuOpen = false} class="rounded p-1 hover:bg-slate-100" aria-label="Close menu">
			<span class="material-symbols-outlined">close</span>
		</button>
	</div>
	<nav class="flex flex-col gap-1 px-3 py-4">
		<a
			href={resolve('/')}
			onclick={() => menuOpen = false}
			class="flex items-center gap-3 rounded-lg px-3 py-3 font-sans text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary {isHome ? 'bg-blue-50 text-primary font-semibold' : ''}"
		>
			<span class="material-symbols-outlined" style="font-size: 20px;">home</span>
			Home
		</a>
		<a
			href={resolve('/go-directory')}
			onclick={() => menuOpen = false}
			class="flex items-center gap-3 rounded-lg px-3 py-3 font-sans text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary {isGoDirectory ? 'bg-blue-50 text-primary font-semibold' : ''}"
		>
			<span class="material-symbols-outlined" style="font-size: 20px;">description</span>
			GO Directory
		</a>
		<a
			href={resolve('/contact')}
			onclick={() => menuOpen = false}
			class="flex items-center gap-3 rounded-lg px-3 py-3 font-sans text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
		>
			<span class="material-symbols-outlined" style="font-size: 20px;">mail</span>
			Contact
		</a>
	</nav>
</div>
