<script lang="ts">
	import AIInsights from '$lib/components/AIInsights.svelte';

	let zoom = $state(100);

	const summary =
		'This Government Order officially mandates the implementation of the 11th Pay Revision Commission\'s recommendations for all state government employees, establishing a new Master Scale for the year 2022 with revised pay structures across all cadres.';

	const takeaways = [
		'Implementation of the 11th PRC recommendations is approved with immediate effect',
		'A new Master Scale for the year 2022 is established replacing the 2015 scale',
		'Decision follows comprehensive review by Committee of Secretaries constituted in June 2021',
		'Supersedes all previous preliminary orders regarding interim relief and ad-hoc allowances'
	];
</script>

<svelte:head>
	<title>GO Reading Room - Know Your Government</title>
</svelte:head>

<div class="flex w-full flex-grow">
	<!-- Document Viewer (2/3) -->
	<div class="flex flex-grow flex-col">
		<!-- Toolbar -->
		<div class="flex items-center justify-between border-b border-[#c4c7c7] bg-[#fbf9f4] px-6 py-3">
			<div class="flex items-center gap-3">
				<span class="rounded-sm bg-[#f0eee9] px-2 py-0.5 font-sans text-xs uppercase text-black" style="letter-spacing: 0.04em;">
					G.O.Ms.No. 42
				</span>
				<span class="font-sans text-xs uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;">
					Finance Department
				</span>
			</div>
			<div class="flex items-center gap-2">
				<button
					onclick={() => { if (zoom > 25) zoom -= 25; }}
					class="flex h-8 w-8 items-center justify-center rounded-sm transition-none hover:bg-[#f0eee9]"
				>
					<span class="material-symbols-outlined text-lg text-black">remove</span>
				</button>
				<span class="min-w-[3rem] text-center font-sans text-xs text-[#5f5e5e]">{zoom}%</span>
				<button
					onclick={() => { if (zoom < 200) zoom += 25; }}
					class="flex h-8 w-8 items-center justify-center rounded-sm transition-none hover:bg-[#f0eee9]"
				>
					<span class="material-symbols-outlined text-lg text-black">add</span>
				</button>
				<div class="mx-2 h-4 w-px bg-[#c4c7c7]"></div>
				<button class="flex h-8 w-8 items-center justify-center rounded-sm transition-none hover:bg-[#f0eee9]">
					<span class="material-symbols-outlined text-lg text-black">download</span>
				</button>
			</div>
		</div>

		<!-- Document Canvas -->
		<div class="flex flex-grow items-start justify-center overflow-auto bg-[#f0eee9] p-10">
			<div
				class="w-full max-w-[680px] bg-white p-12 shadow-md"
				style="transform: scale({zoom / 100}); transform-origin: top center;"
			>
				<!-- Formal Header -->
				<div class="mb-8 text-center">
					<p class="font-sans text-xs font-semibold uppercase text-[#5f5e5e]" style="letter-spacing: 0.1em;">
						Government of Andhra Pradesh
					</p>
					<p class="mt-1 font-serif text-sm text-[#444748]">
						Finance (HR.I-Plg. &amp; Policy) Department
					</p>
				</div>

				<hr class="mb-8 border-black" />

				<!-- Abstract -->
				<div class="mb-8">
					<h2 class="mb-3 font-sans text-xs font-semibold uppercase text-black" style="letter-spacing: 0.06em;">Abstract</h2>
					<p class="font-serif text-base leading-relaxed text-[#444748]">
						FINANCE (HR.I-Plg. &amp; Policy) DEPARTMENT — Public Services —
						Implementation of 11th Pay Revision Commission — Master Scale — Revised
						Scales of Pay 2022 — Orders — Issued.
					</p>
				</div>

				<!-- GO Number -->
				<div class="mb-8">
					<p class="font-serif text-base font-semibold text-black">
						G.O.Ms.No.1 &nbsp;&nbsp;&nbsp; Dated: 17-01-2022
					</p>
				</div>

				<hr class="mb-8 border-[#c4c7c7]" />

				<!-- References -->
				<div class="mb-8">
					<h2 class="mb-3 font-sans text-xs font-semibold uppercase text-black" style="letter-spacing: 0.06em;">
						Read the following:
					</h2>
					<ol class="list-decimal space-y-2 pl-5 font-serif text-base leading-relaxed text-[#444748]">
						<li>G.O.Ms.No.75, General Administration (SC.A) Department, dated 28.05.2018</li>
						<li>G.O.Rt.No.75, General Administration (SC.A) Department, dated 02.06.2018</li>
						<li>Report of the 11th Pay Revision Commission submitted on 05.10.2020</li>
					</ol>
				</div>

				<hr class="mb-8 border-[#c4c7c7]" />

				<!-- Order -->
				<div>
					<h2 class="mb-3 font-sans text-xs font-semibold uppercase text-black" style="letter-spacing: 0.06em;">Order</h2>
					<p class="font-serif text-base leading-relaxed text-[#444748]">
						In pursuance of the recommendations of the 11th Pay Revision Commission and after
						careful examination by the Committee of Secretaries constituted vide reference 1st
						read above, the Government hereby orders the implementation of the Revised Master
						Scale of Pay 2022 for all categories of State Government employees with effect from
						1st July 2022.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- AI Insights Sidebar (1/3) -->
	<div class="w-[380px] flex-shrink-0">
		<AIInsights {summary} {takeaways} />
	</div>
</div>
