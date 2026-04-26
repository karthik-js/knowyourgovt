<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="mt-auto border-t border-slate-200 bg-white">
	<div class="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:gap-4 md:px-8">
		<div class="flex flex-col gap-1">
			<span class="font-serif text-lg font-bold text-slate-900">Know Your Government</span>
			<p class="font-sans text-xs tracking-wide text-slate-500">© 2024 Know Your Government. Official Government Document Portal.</p>
		</div>
		<div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
			<span class="font-sans text-xs tracking-wide text-slate-500 transition-colors hover:text-[#004B87]">Terms of Service</span>
			<span class="font-sans text-xs tracking-wide text-slate-500 transition-colors hover:text-[#004B87]">Cookie Policy</span>
			<span class="font-sans text-xs tracking-wide text-slate-500 transition-colors hover:text-[#004B87]">Help Center</span>
			<a href={resolve('/contact')} class="font-sans text-xs tracking-wide text-slate-500 transition-colors hover:text-[#004B87]">Contact Us</a>
		</div>
	</div>
</footer>
