<script lang="ts">
	import AIInsights from '$lib/components/AIInsights.svelte';

	let zoom = $state(100);

	const summary =
		'This order authorizes the allocation of ₹450 Crores for urban infrastructure. It specifically targets municipal development and mandates the Director of Municipal Administration to initiate fund distribution for ongoing projects.';

	const takeaways = [
		'Administrative Sanction for ₹450 Crores towards Urban Infrastructure Development Projects',
		'Targets selected municipalities for infrastructure improvements',
		'Director of Municipal Administration authorized to take further action',
		'Follows orders issued via G.O.Rt.No. 1284 and U.O.Note No. 4210'
	];
</script>

<svelte:head>
	<title>GO Reading Room - Know Your Government</title>
</svelte:head>

<div class="mx-auto flex h-[calc(100vh-64px)] w-full max-w-[1440px]">
	<!-- Document Viewer -->
	<section class="flex min-w-0 flex-1 flex-col border-r border-slate-200 bg-white">
		<!-- Toolbar -->
		<div class="flex flex-shrink-0 items-center justify-between p-6">
			<div class="flex items-center gap-4">
				<button class="flex items-center gap-2 font-semibold text-[#004B87] transition-all hover:opacity-80">
					<span class="material-symbols-outlined">arrow_back</span>
					<span class="font-sans text-xs font-medium uppercase tracking-widest">Back to Results</span>
				</button>
				<div class="h-4 w-px bg-slate-200"></div>
				<span class="font-sans text-xs font-medium uppercase tracking-widest text-slate-500">GO.MS.No 42 | FINANCE DEPARTMENT</span>
			</div>
			<div class="flex items-center gap-2">
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
				<button class="flex items-center gap-2 rounded bg-[#004B87] px-4 py-2 text-white transition-all hover:opacity-90">
					<span class="material-symbols-outlined" style="font-size: 20px;">download</span>
					<span class="font-sans text-xs font-medium">PDF</span>
				</button>
			</div>
		</div>

		<!-- PDF Canvas (scrollable) -->
		<div class="min-h-0 flex-1 overflow-y-auto border-t border-outline-variant bg-surface-container-low p-12 shadow-inner">
			<div
				class="relative mx-auto min-h-[1000px] max-w-[700px] border border-slate-200 bg-white p-16 shadow-lg"
				style="transform: scale({zoom / 100}); transform-origin: top center;"
			>
				<!-- Government Seal Header -->
				<div class="mb-12 flex flex-col items-center text-center">
					<h1 class="font-serif text-xl font-bold uppercase tracking-widest text-slate-800">Government of Andhra Pradesh</h1>
					<h2 class="font-serif text-lg font-bold text-slate-700">Abstract</h2>
				</div>

				<!-- Document Content -->
				<div class="space-y-6 text-slate-800">
					<p class="border-l-4 border-[#004B87] bg-slate-50 py-2 pl-4 font-sans text-[15px] italic leading-relaxed">
						Finance Department - Budget Estimates 2024-25 - Release of funds for Municipal Administration and Urban Development - Administrative Sanction - Accorded.
					</p>

					<div class="border-b pb-1 font-sans text-[13px] font-semibold uppercase tracking-wider text-slate-500">FINANCE (BUDGET.I) DEPARTMENT</div>

					<div class="flex items-start justify-between">
						<div class="font-sans text-sm font-bold">G.O.Ms.No. 42</div>
						<div class="text-right font-sans text-sm">Dated: 24-05-2024<br/>Read the following:</div>
					</div>

					<ol class="ml-6 list-decimal space-y-2 font-sans text-sm text-slate-700">
						<li>G.O.Rt.No. 1284, Finance (Budget.I) Department, dt.15.03.2024</li>
						<li>U.O.Note No. 4210/MA&amp;UD/2024, dt.10.05.2024</li>
					</ol>

					<h3 class="mt-10 border-t pt-6 font-serif text-lg font-bold">ORDER:</h3>
					<p class="font-sans text-[15px] leading-relaxed">
						In pursuance of the orders issued in the references 1st and 2nd read above, Government hereby accord Administrative Sanction for an amount of <span class="font-bold underline decoration-[#004B87]">₹450,00,00,000/- (Rupees Four Hundred and Fifty Crores only)</span> towards the implementation of Urban Infrastructure Development Projects in selected municipalities.
					</p>
					<p class="font-sans text-[15px] leading-relaxed">
						The Director of Municipal Administration, AP is requested to take further necessary action in the matter accordingly.
					</p>

					<div class="mt-20 flex flex-col items-end">
						<div class="text-center">
							<p class="font-sans text-[13px] font-semibold uppercase tracking-wider">(BY ORDER AND IN THE NAME OF THE GOVERNOR OF ANDHRA PRADESH)</p>
							<p class="mt-8 font-serif text-lg font-bold">Dr. S. Sivaraman</p>
							<p class="font-sans text-sm">Special Chief Secretary to Government</p>
						</div>
					</div>
				</div>

				<!-- Watermark -->
				<div class="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.03]">
					<span class="-rotate-45 font-serif text-9xl font-bold">OFFICIAL</span>
				</div>
			</div>
		</div>
	</section>

	<!-- AI Insights Sidebar -->
	<div class="w-[350px] flex-shrink-0">
		<AIInsights {summary} {takeaways} />
	</div>
</div>
