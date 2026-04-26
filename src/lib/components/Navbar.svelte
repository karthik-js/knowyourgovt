<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let isGoDirectory = $derived(page.url.pathname.startsWith('/go-directory'));
	let isHome = $derived(page.url.pathname === '/');
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
	</nav>
</header>
