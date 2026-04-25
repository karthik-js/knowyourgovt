<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import portalSeal from '$lib/assets/portal-seal.svg';

	let isGoDirectory = $derived(page.url.pathname.startsWith('/go-directory'));
</script>

<nav class="sticky top-0 z-50 border-b border-zinc-900 bg-white" style="border-bottom-width: 1px;">
	<div class="mx-auto flex w-full max-w-360 items-center px-12 py-6">
		<div class="flex items-center gap-8">
			<a href={resolve('/')} class="flex items-center gap-4">
				<img alt="Know Your Government Logo" class="h-8 w-8 object-contain" src={portalSeal} />
				<span class="font-serif text-2xl font-bold uppercase tracking-tighter text-zinc-900">
					KYG
				</span>
			</a>
			<a
				href={resolve('/go-directory')}
				data-active={isGoDirectory || undefined}
				class="relative cursor-pointer px-3 py-2 font-serif font-normal uppercase text-zinc-500 after:absolute after:bottom-0 after:left-3 after:h-px after:w-0 after:bg-zinc-500 after:transition-all after:duration-300 hover:after:w-[calc(100%-24px)] active:opacity-80 data-[active='true']:font-bold data-[active='true']:text-zinc-900 data-[active='true']:after:h-0.5 data-[active='true']:after:w-[calc(100%-24px)] data-[active='true']:[text-shadow:1px_1px_2px_rgba(0,0,0,0.3)]"
			>
				GO Directory
			</a>
		</div>
	</div>
</nav>
