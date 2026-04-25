<script lang="ts">
	import { resolve } from '$app/paths';
	import portalSeal from '$lib/assets/portal-seal.svg';

	let { variant = 'default' }: { variant?: 'home' | 'default' } = $props();
</script>

{#if variant === 'home'}
	<!-- Home page nav: white bg, logo + brand, nav links, search + account icons -->
	<nav class="sticky top-0 z-50 border-b border-zinc-900 bg-white" style="border-bottom-width: 1px;">
		<div class="mx-auto flex w-full max-w-[1440px] items-center justify-between px-12 py-6">
			<div class="flex items-center gap-4">
				<img alt="Know Your Government Logo" class="h-8 w-8 object-contain" src={portalSeal} />
				<a href={resolve('/')} class="font-serif text-2xl font-bold uppercase tracking-tighter text-zinc-900">
					Know Your Government
				</a>
			</div>
			<div class="hidden items-center gap-8 font-serif font-medium tracking-tight md:flex">
				<a
					href={resolve('/go-directory')}
					class="cursor-pointer px-3 py-2 font-normal text-zinc-500 transition-none hover:bg-zinc-900 hover:text-white active:opacity-80"
				>
					GO Directory
				</a>
				<span class="cursor-pointer px-3 py-2 font-normal text-zinc-500 transition-none hover:bg-zinc-900 hover:text-white active:opacity-80">
					States
				</span>
			</div>
			<div class="flex items-center gap-6">
				<span class="material-symbols-outlined cursor-pointer p-2 text-zinc-900 transition-none hover:bg-zinc-900 hover:text-white active:opacity-80">search</span>
				<span class="material-symbols-outlined cursor-pointer p-2 text-zinc-900 transition-none hover:bg-zinc-900 hover:text-white active:opacity-80">account_balance</span>
			</div>
		</div>
	</nav>
{:else}
	<!-- Inner page nav: seal + brand, GO Directory (bold/active), States, AP dropdown, account icon -->
	<header class="border-b border-zinc-950 bg-white" style="border-bottom-width: 0.5px;">
		<div class="mx-auto flex w-full max-w-[1440px] items-center justify-between px-12 py-4">
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-4">
					<img alt="Portal Seal" class="h-10 w-10 rounded-full border border-zinc-900 object-contain" style="border-width: 0.5px;" src={portalSeal} />
					<a href={resolve('/')} class="font-serif text-xl font-black uppercase tracking-tighter text-zinc-950">
						Know Your Government
					</a>
				</div>
				<nav class="hidden gap-6 font-serif text-sm uppercase tracking-wider md:flex">
					<a
						href={resolve('/go-directory')}
						class="cursor-pointer border-b border-zinc-950 pb-1 font-bold text-zinc-950 active:opacity-80"
					>
						GO Directory
					</a>
					<span class="cursor-pointer px-2 py-1 text-zinc-500 transition-none hover:bg-zinc-950 hover:text-zinc-50 active:opacity-80">
						States
					</span>
				</nav>
			</div>
			<div class="flex items-center gap-6">
				<div class="hidden cursor-pointer items-center gap-2 px-2 py-1 font-serif text-sm uppercase tracking-wider text-zinc-500 transition-none hover:bg-zinc-950 hover:text-zinc-50 md:flex active:opacity-80">
					<span>Andhra Pradesh</span>
					<span class="material-symbols-outlined text-[16px]">arrow_drop_down</span>
				</div>
				<button class="flex cursor-pointer items-center justify-center rounded-none border border-transparent p-2 transition-none hover:bg-zinc-950 hover:text-zinc-50 active:opacity-80">
					<span class="material-symbols-outlined">account_balance</span>
				</button>
			</div>
		</div>
	</header>
{/if}
