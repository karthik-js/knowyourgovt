<script lang="ts">
	let { takeaways, summary }: { takeaways: string[]; summary: string } = $props();
</script>

<aside class="sticky top-16 flex h-[calc(100vh-64px)] flex-col overflow-y-auto border-l border-slate-200 bg-[#F4F5F7] p-6">
	<div class="mb-6 flex items-center gap-2">
		<span class="material-symbols-outlined text-[#004B87]" style="font-variation-settings: 'FILL' 1;">analytics</span>
		<h3 class="font-serif text-lg font-bold">Document Insights</h3>
	</div>

	<!-- AI Summary Card -->
	<div class="mb-6 rounded-lg border border-outline-variant bg-white p-5 shadow-sm">
		<div class="mb-3 flex items-center gap-2">
			<span class="font-sans text-[13px] font-semibold uppercase tracking-wider text-[#004B87]">AI-GENERATED SUMMARY</span>
		</div>
		<p class="font-sans text-sm leading-relaxed text-slate-700">
			{summary}
		</p>
	</div>

	<!-- Key Takeaways -->
	<div class="mb-6">
		<h4 class="mb-3 font-sans text-[13px] font-semibold uppercase tracking-wider text-[#004B87]">KEY TAKEAWAYS</h4>
		<ul class="flex flex-col gap-3">
			{#each takeaways as point, i (i)}
				<li class="flex items-start gap-2 font-sans text-sm leading-relaxed text-slate-700">
					<span class="mt-0.5 text-[#004B87]">•</span>
					<span>{point}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Action Area -->
	<div class="mt-auto border-t border-slate-300 pt-6">
		<button class="mb-3 flex w-full items-center justify-center gap-2 rounded border-2 border-[#004B87] bg-white py-3 font-sans font-bold text-[#004B87] transition-colors hover:bg-slate-50">
			<span class="material-symbols-outlined">share</span>
			Share Insights
		</button>
		<button class="flex w-full items-center justify-center gap-2 rounded bg-slate-800 py-3 font-sans font-bold text-white transition-colors hover:bg-slate-900">
			<span class="material-symbols-outlined">print</span>
			Print Analysis
		</button>
	</div>
</aside>
