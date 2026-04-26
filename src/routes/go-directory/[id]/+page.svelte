<script lang="ts">
	import AIInsights from '$lib/components/AIInsights.svelte';

	let { data } = $props();

	let zoom = $state(100);
	let showInsights = $state(false);

	const go = $derived(data.go);
	const summary = $derived(go.aiOverview || go.description);
	const takeaways = $derived(
		go.pdfText
			? go.pdfText
				.split(/(?:ORDER:|O R D E R:)/)
				.slice(1)
				.join('')
				.split(/\d+\.\s+/)
				.filter((s: string) => s.trim().length > 20)
				.slice(0, 4)
				.map((s: string) => s.trim().replace(/\s+/g, ' ').slice(0, 200))
			: [go.description]
	);
	const formattedDate = $derived(
		new Date(go.scrapedAt).toLocaleDateString('en-GB', {
			day: '2-digit', month: '2-digit', year: 'numeric'
		})
	);
</script>

<svelte:head>
	<title>{go.title} - Know Your Government</title>
</svelte:head>

<div class="mx-auto flex w-full max-w-[1440px] flex-col lg:h-[calc(100vh-64px)] lg:flex-row">
	<!-- Document Viewer -->
	<section class="flex min-h-[60vh] min-w-0 flex-1 flex-col border-r border-slate-200 bg-white lg:min-h-0">
		<!-- Toolbar -->
		<div class="sticky top-16 z-10 flex flex-shrink-0 flex-wrap items-center gap-3 bg-white p-4 sm:p-6 lg:static">
			<div class="flex flex-wrap items-center gap-3 sm:gap-4">
				<a href="/go-directory" class="flex items-center gap-2 font-semibold text-[#004B87] transition-all hover:opacity-80">
					<span class="material-symbols-outlined">arrow_back</span>
					<span class="font-sans text-xs font-medium uppercase tracking-widest">Back to Results</span>
				</a>
				<div class="hidden h-4 w-px bg-slate-200 min-[480px]:block"></div>
				<span class="w-full font-sans text-xs font-medium uppercase tracking-widest text-slate-500 min-[480px]:w-auto">{go.year} | {go.title.slice(0, 50)}{go.title.length > 50 ? '...' : ''}</span>
			</div>
			<div class="ml-auto flex items-center gap-2">
				<button
					onclick={() => { if (zoom > 25) zoom -= 25; }}
					class="rounded bg-slate-100 p-2 transition-colors hover:bg-slate-200"
				>
					<span class="material-symbols-outlined">zoom_in</span>
				</button>
				<button
					onclick={() => { if (zoom < 200) zoom += 25; }}
					class="rounded bg-slate-100 p-2 transition-colors hover:bg-slate-200"
				>
					<span class="material-symbols-outlined">zoom_out</span>
				</button>
				<a href={go.pdfUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded bg-[#004B87] px-4 py-2 text-white transition-all hover:opacity-90">
					<span class="material-symbols-outlined" style="font-size: 20px;">download</span>
					<span class="font-sans text-xs font-medium">PDF</span>
				</a>
				<button
					class="flex items-center gap-1.5 rounded bg-slate-100 px-3 py-2 font-sans text-xs font-semibold text-primary transition-colors hover:bg-slate-200 lg:hidden"
					onclick={() => showInsights = !showInsights}
				>
					<span class="material-symbols-outlined" style="font-size: 20px;">analytics</span>
					Insights
				</button>
			</div>
		</div>

		<!-- PDF Canvas (scrollable) -->
		<div class="min-h-0 flex-1 overflow-y-auto border-t border-outline-variant bg-surface-container-low p-4 shadow-inner sm:p-6 md:p-12">
			<div
				class="relative mx-auto min-h-[1000px] max-w-[700px] border border-slate-200 bg-white p-6 shadow-lg sm:p-10 md:p-16"
				style="transform: scale({zoom / 100}); transform-origin: top center;"
			>
				<!-- Government Seal Header -->
				<div class="mb-12 flex flex-col items-center text-center">
					<h1 class="font-serif text-xl font-bold uppercase tracking-widest text-slate-800">Government of Andhra Pradesh</h1>
					<h2 class="font-serif text-lg font-bold text-slate-700">{go.title}</h2>
					<p class="mt-2 font-sans text-sm text-slate-500">Dated: {formattedDate}</p>
				</div>

				{#if go.pdfText}
					<!-- Document Content from PDF -->
					<div class="space-y-4 text-slate-800">
						{#each go.pdfText.split(/\n\n|(?=P a g e \|)/) as paragraph}
							{#if paragraph.trim()}
								<p class="font-sans text-[15px] leading-relaxed">{paragraph.trim()}</p>
							{/if}
						{/each}
					</div>
				{:else}
					<!-- No text extracted -->
					<div class="flex flex-col items-center justify-center py-20 text-center">
						<span class="material-symbols-outlined mb-4 text-5xl text-slate-300">description</span>
						<p class="font-sans text-sm text-slate-500">PDF text not yet available for this Government Order.</p>
						<a href={go.pdfUrl} target="_blank" rel="noopener noreferrer" class="mt-4 font-sans text-sm font-semibold text-primary underline">Download Original PDF</a>
					</div>
				{/if}

				<!-- Watermark -->
				<div class="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.03]">
					<span class="-rotate-45 font-serif text-9xl font-bold">OFFICIAL</span>
				</div>
			</div>
		</div>
	</section>

	<!-- AI Insights Sidebar (desktop: inline, mobile: slide-over) -->
	<div class="hidden lg:block lg:w-[350px] lg:flex-shrink-0">
		<AIInsights {summary} {takeaways} />
	</div>
</div>

<!-- Mobile Sidebar Overlay -->
{#if showInsights}
	<div class="fixed inset-0 z-40 bg-black/40 lg:hidden" onclick={() => showInsights = false} role="presentation"></div>
{/if}
<div
	class="fixed top-0 right-0 z-50 h-full w-[320px] max-w-[85vw] transform shadow-xl transition-transform duration-300 ease-in-out lg:hidden"
	class:translate-x-0={showInsights}
	class:translate-x-full={!showInsights}
>
	<div class="flex h-full flex-col">
		<div class="flex items-center justify-between border-b border-slate-200 bg-[#F4F5F7] px-4 py-3">
			<span class="font-serif text-lg font-bold">Insights</span>
			<button onclick={() => showInsights = false} class="rounded p-1 hover:bg-slate-200">
				<span class="material-symbols-outlined">close</span>
			</button>
		</div>
		<div class="flex-1 overflow-y-auto">
			<AIInsights {summary} {takeaways} />
		</div>
	</div>
</div>
