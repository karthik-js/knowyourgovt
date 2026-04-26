<script lang="ts">
	import { resolve } from '$app/paths';
	import type { GO } from '$lib/api';

	let { order }: { order: GO } = $props();

	const formattedDate = $derived(
		new Date(order.scrapedAt).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).toUpperCase()
	);
</script>

<article class="group rounded border border-outline-variant bg-white p-4 shadow-sm transition-colors hover:bg-slate-50 sm:p-5">
	<div class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
		<span class="font-sans text-[13px] font-semibold uppercase tracking-widest text-primary">YEAR {order.year}</span>
		<div class="flex items-center gap-2">
			<span class="font-sans text-xs text-slate-400">{formattedDate}</span>
			{#if order.status === 'done'}
				<span class="rounded border border-green-100 bg-green-50 px-2 py-0.5 font-sans text-[10px] font-bold text-green-700">AI READY</span>
			{:else if order.status === 'pending'}
				<span class="rounded bg-amber-50 border border-amber-100 px-2 py-0.5 font-sans text-[10px] font-bold text-amber-700">PROCESSING</span>
			{:else}
				<span class="rounded bg-slate-100 px-2 py-0.5 font-sans text-[10px] font-bold text-slate-600">UNAVAILABLE</span>
			{/if}
		</div>
	</div>

	<h2 class="mb-2 font-serif text-xl font-bold leading-tight text-on-surface transition-colors group-hover:text-primary">
		{order.title}
	</h2>
	<p class="mb-4 line-clamp-2 font-sans text-sm text-slate-500">{order.description}</p>

	<div class="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
		<div class="flex items-center gap-4 sm:gap-6">
			<div class="flex items-center gap-1.5 font-sans text-xs text-slate-500">
				<span class="material-symbols-outlined" style="font-size: 18px;">description</span>
				PDF
			</div>
			<div class="flex items-center gap-1.5 font-sans text-xs text-slate-500">
				<span class="material-symbols-outlined" style="font-size: 18px;">link</span>
				Ref: {order.id.slice(0, 20)}...
			</div>
		</div>
		<div class="flex items-center">
			<a
				href={resolve(`/go-directory/${encodeURIComponent(order.id)}`)}
				class="btn-outline flex items-center gap-2 px-4 py-1.5 text-sm"
			>
				<span class="material-symbols-outlined text-sm">download</span>
				VIEW G.O.
			</a>
		</div>
	</div>
</article>
