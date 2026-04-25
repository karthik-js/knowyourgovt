<script lang="ts">
	import { resolve } from '$app/paths';

	let { variant = 'default' }: { variant?: 'home' | 'default' } = $props();
</script>

{#if variant === 'home'}
	<footer class="mt-auto w-full border-t border-zinc-900 bg-zinc-50" style="border-top-width: 0.5px;">
		<div class="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-6 px-12 py-10 md:flex-row md:gap-0">
			<span class="font-serif text-lg font-bold text-zinc-900">Know Your Government</span>
			<div class="flex flex-wrap justify-center gap-6 font-serif text-sm italic">
				<span class="text-zinc-600 no-underline transition-none hover:text-zinc-900 hover:underline">Terms of Service</span>
				<span class="text-zinc-600 no-underline transition-none hover:text-zinc-900 hover:underline">Cookie Policy</span>
				<span class="text-zinc-600 no-underline transition-none hover:text-zinc-900 hover:underline">Help Center</span>
				<a href={resolve('/contact')} class="text-zinc-600 no-underline transition-none hover:text-zinc-900 hover:underline">Contact Us</a>
			</div>
			<span class="font-serif text-sm italic text-zinc-900">© 2024 Institutional Archives of Government. All rights reserved.</span>
		</div>
	</footer>
{:else}
	<footer class="w-full border-t border-zinc-950 bg-zinc-50" style="border-top-width: 0.5px;">
		<div class="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between border-t border-zinc-950 px-12 py-12 md:flex-row">
			<div class="mb-4 font-serif text-xs font-bold uppercase tracking-tight md:mb-0">
				© Know Your Government
			</div>
			<nav class="flex flex-wrap justify-center gap-6 font-serif text-xs tracking-tight">
				<span class="text-zinc-600 transition-colors duration-150 hover:text-zinc-950">Terms of Service</span>
				<span class="text-zinc-600 transition-colors duration-150 hover:text-zinc-950">Cookie Policy</span>
				<span class="text-zinc-600 transition-colors duration-150 hover:text-zinc-950">Help Center</span>
				<a href={resolve('/contact')} class="text-zinc-600 transition-colors duration-150 hover:text-zinc-950">Contact Us</a>
			</nav>
		</div>
	</footer>
{/if}
