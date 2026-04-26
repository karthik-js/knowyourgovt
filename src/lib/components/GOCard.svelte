<script lang="ts">
	import { resolve } from '$app/paths';

	interface GOOrder {
		number: string;
		date: string;
		title: string;
		description: string;
		department: string;
		type: string;
		size?: string;
		ref?: string;
	}

	let { order }: { order: GOOrder } = $props();
</script>

<article class="group rounded border border-outline-variant bg-white p-5 shadow-sm transition-colors hover:bg-slate-50">
	<div class="mb-3 flex items-start justify-between">
		<span class="font-sans text-[13px] font-semibold uppercase tracking-widest text-primary">{order.department}</span>
		<div class="flex items-center gap-2">
			<span class="font-sans text-xs text-slate-400">{order.date}</span>
			{#if order.type === 'Financial' || order.type === 'Extraordinary'}
				<span class="rounded border border-amber-100 bg-amber-50 px-2 py-0.5 font-sans text-[10px] font-bold text-amber-700">EXTRAORDINARY</span>
			{:else}
				<span class="rounded bg-slate-100 px-2 py-0.5 font-sans text-[10px] font-bold text-slate-600">ORDINARY</span>
			{/if}
		</div>
	</div>

	<h2 class="mb-2 font-serif text-xl font-bold leading-tight text-on-surface transition-colors group-hover:text-primary">
		{order.number} - {order.title}
	</h2>
	<p class="mb-4 line-clamp-2 font-sans text-sm text-slate-500">{order.description}</p>

	<div class="flex items-center justify-between border-t border-slate-100 pt-4">
		<div class="flex items-center gap-6">
			<div class="flex items-center gap-1.5 font-sans text-xs text-slate-500">
				<span class="material-symbols-outlined" style="font-size: 18px;">description</span>
				{order.size || '2.4 MB (PDF)'}
			</div>
			<div class="flex items-center gap-1.5 font-sans text-xs text-slate-500">
				<span class="material-symbols-outlined" style="font-size: 18px;">link</span>
				Ref: {order.ref || order.number}
			</div>
		</div>
		<div class="flex items-center gap-3">
			<button class="p-2 text-slate-400 transition-colors hover:text-primary">
				<span class="material-symbols-outlined">bookmark</span>
			</button>
			<a
				href={resolve(`/go-directory/${encodeURIComponent(order.number)}`)}
				class="btn-outline flex items-center gap-2 px-4 py-1.5 text-sm"
			>
				<span class="material-symbols-outlined text-sm">download</span>
				VIEW G.O.
			</a>
		</div>
	</div>
</article>
