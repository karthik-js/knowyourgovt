<script lang="ts">
	import { resolve } from '$app/paths';

	interface GOOrder {
		number: string;
		date: string;
		title: string;
		description: string;
		department: string;
		type: string;
	}

	let { order }: { order: GOOrder } = $props();
</script>

<a
	href={resolve(`/go-directory/${encodeURIComponent(order.number)}`)}
	class="-mx-4 flex cursor-pointer flex-col gap-2 rounded-lg border-b border-[#c4c7c7] px-4 py-6 transition-none hover:bg-[#f5f3ee]"
	style="border-bottom-width: 0.5px;"
>
	<div class="mb-1 flex items-start justify-between">
		<div class="flex items-center gap-2">
			<span class="rounded-sm bg-[#f0eee9] px-2 py-0.5 font-sans text-xs uppercase text-black" style="letter-spacing: 0.04em;">
				{order.number}
			</span>
			<span class="font-sans text-xs uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;">
				{order.date}
			</span>
		</div>
		<span class="material-symbols-outlined text-[#5f5e5e]">download</span>
	</div>

	<h3 class="font-serif text-2xl font-medium leading-snug text-black">{order.title}</h3>
	<p class="line-clamp-2 font-serif text-base leading-relaxed text-[#444748]">{order.description}</p>

	<div class="mt-1 flex gap-4 pt-1 font-sans text-xs uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;">
		<span>Dept: {order.department}</span>
		<span>Type: {order.type}</span>
	</div>
</a>
