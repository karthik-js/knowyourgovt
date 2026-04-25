<script lang="ts">
	let { takeaways, summary }: { takeaways: string[]; summary: string } = $props();
</script>

<aside class="flex h-full flex-col overflow-y-auto border-l border-[#c4c7c7] bg-[#fbf9f4] p-6">
	<div class="mb-6 flex items-center gap-2 border-b border-black pb-2">
		<span class="material-symbols-outlined text-xl text-black">psychology</span>
		<h3 class="font-sans text-sm font-semibold uppercase text-black" style="letter-spacing: 0.06em;">AI Document Insights</h3>
		<span class="ml-auto rounded-sm bg-[#f0eee9] px-2 py-0.5 font-sans text-xs uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;">
			AI Generated
		</span>
	</div>

	<div class="mb-6">
		<h4 class="mb-2 font-sans text-xs font-semibold uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;">
			Executive Summary
		</h4>
		<p class="font-serif text-base leading-relaxed text-[#444748]">
			{summary}
		</p>
	</div>

	<div class="mb-6">
		<h4 class="mb-3 font-sans text-xs font-semibold uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;">
			Key Takeaways
		</h4>
		<ul class="flex flex-col gap-3">
			{#each takeaways as point, i (i)}
				<li class="flex items-start gap-2 font-serif text-base leading-relaxed text-[#444748]">
					<span class="mt-1 text-black">—</span>
					<span>{point}</span>
				</li>
			{/each}
		</ul>
	</div>

	<button
		class="mt-auto flex w-full items-center justify-center gap-2 border border-black bg-black py-2.5 font-sans text-sm font-semibold uppercase text-white transition-none hover:bg-white hover:text-black"
		style="letter-spacing: 0.06em;"
	>
		<span class="material-symbols-outlined text-lg">share</span>
		Share Insights
	</button>
</aside>
