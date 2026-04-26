<script lang="ts">
	import GOCard from '$lib/components/GOCard.svelte';

	let showFilters = $state(false);

	const orders = [
		{
			number: 'G.O.Ms.No. 142',
			date: 'OCT 24, 2023',
			title: 'Comprehensive guidelines for the implementation of digital classrooms in Government High Schools.',
			description:
				'Adoption of modern pedagogical tools and technological integration across rural districts. Provision of smart boards, tablets, and localized digital curriculum modules for academic year 2024-25.',
			department: 'EDUCATION DEPARTMENT',
			type: 'Routine',
			size: '2.4 MB (PDF)',
			ref: '2023-ED-0142'
		},
		{
			number: 'G.O.Rt.No. 891',
			date: 'OCT 22, 2023',
			title: 'Sanction of Additional Funds for Infrastructure Development in Newly Formed Districts.',
			description:
				'Allocation of ₹450 Crores towards administrative complex construction and arterial road connectivity improvements. Immediate disbursement authorized under budgetary head 2023-F-891.',
			department: 'FINANCE DEPARTMENT',
			type: 'Financial',
			size: '1.1 MB (PDF)',
			ref: '2023-FN-0891'
		},
		{
			number: 'G.O.Ms.No. 312',
			date: 'OCT 20, 2023',
			title: 'Amendment to the Land Allotment Policy for Micro & Small Enterprises (MSEs).',
			description:
				'Revised lease terms and simplified documentation process for industrial plots below 2 acres. Clarification on sub-leasing rights and infrastructure cess exemptions.',
			department: 'REVENUE DEPARTMENT',
			type: 'Routine',
			size: '3.8 MB (PDF)',
			ref: '2023-RV-0312'
		}
	];
</script>

<svelte:head>
	<title>GO Directory - Know Your Government</title>
</svelte:head>

<div class="mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row">
	<!-- Mobile Filter Toggle -->
	<div class="flex items-center justify-between border-b border-slate-200 bg-[#F4F5F7] px-4 py-3 lg:hidden">
		<h2 class="font-serif text-lg font-bold text-[#004B87]">GO Directory</h2>
		<button
			class="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 font-sans text-sm font-semibold text-primary"
			onclick={() => showFilters = !showFilters}
		>
			<span class="material-symbols-outlined text-lg">tune</span>
			Filters
		</button>
	</div>

	<!-- Sidebar Filters -->
	<aside class="{showFilters ? 'flex' : 'hidden'} flex-col gap-2 border-b border-slate-200 bg-[#F4F5F7] px-4 py-6 lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-64px)] lg:w-[250px] lg:flex-shrink-0 lg:border-b-0 lg:border-r">
		<div class="mb-6 hidden px-2 lg:block">
			<h2 class="font-serif text-lg font-bold text-[#004B87]">GO Filters</h2>
		</div>
		<div class="space-y-4 px-2">
			<div class="mt-2 space-y-2">
				<span class="block font-sans text-[13px] font-semibold uppercase tracking-wider text-slate-400">DATE RANGE</span>
				<div class="grid grid-cols-2 gap-2 lg:grid-cols-1">
					<input class="form-input w-full px-2 py-1 text-sm" type="date" />
					<input class="form-input w-full px-2 py-1 text-sm" type="date" />
				</div>
			</div>
		</div>
		<button class="mx-2 mt-4 rounded-lg bg-primary-container py-2 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:mt-auto">
			Apply Filters
		</button>
	</aside>

	<!-- Content Area -->
	<section class="min-h-screen min-w-0 flex-1 bg-[#F4F5F7] pb-12">
		<!-- Search & Hero -->
		<div class="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 md:px-10 md:py-12">
			<div class="max-w-[800px]">
				<h1 class="mb-2 font-serif text-2xl font-bold text-primary md:text-[28px]">Government Orders Directory</h1>
				<p class="mb-6 font-sans text-sm leading-relaxed text-slate-500 md:mb-8 md:text-[15px]">Search the official repository of Government Orders, Circulars, and Administrative Directives issued by the State of Andhra Pradesh.</p>
				<div class="group relative">
					<span class="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-primary transition-colors group-focus-within:text-secondary-container">search</span>
					<input
						class="w-full rounded-xl border-2 border-slate-200 py-5 pl-14 pr-6 font-sans text-lg shadow-sm outline-none transition-all focus:border-primary-container focus:ring-4 focus:ring-primary/5"
						placeholder="Search by GO Number, Keyword, or Department..."
						type="text"
					/>
				</div>

			</div>
		</div>

		<!-- Feed Header -->
		<div class="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-10 md:py-6">
			<div class="flex items-center gap-4">
				<h3 class="font-sans text-[13px] font-semibold uppercase tracking-wider text-slate-500">CHRONOLOGICAL FEED</h3>
				<div class="hidden h-px w-24 bg-slate-200 sm:block"></div>
			</div>
			<div class="flex items-center gap-2">
				<span class="font-sans text-xs text-slate-500">SORT BY:</span>
				<select class="cursor-pointer border-none bg-transparent font-sans text-xs font-bold text-primary focus:ring-0">
					<option>Newest First</option>
					<option>Oldest First</option>
					<option>Most Relevant</option>
				</select>
			</div>
		</div>

		<!-- Feed Content -->
		<div class="space-y-4 px-4 sm:px-6 md:px-10">
			{#each orders as order (order.number)}
				<GOCard {order} />
			{/each}

			<!-- Pagination -->
			<div class="flex items-center justify-center gap-2 py-8">
				<button class="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white text-slate-400 transition-colors hover:border-primary hover:text-primary">
					<span class="material-symbols-outlined">chevron_left</span>
				</button>
				<button class="flex h-10 w-10 items-center justify-center rounded bg-primary-container font-bold text-white">1</button>
				<button class="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white text-slate-600 transition-colors hover:border-primary hover:text-primary">2</button>
				<button class="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white text-slate-600 transition-colors hover:border-primary hover:text-primary">3</button>
				<span class="mx-2 text-slate-400">...</span>
				<button class="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white text-slate-600 transition-colors hover:border-primary hover:text-primary">24</button>
				<button class="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white text-slate-400 transition-colors hover:border-primary hover:text-primary">
					<span class="material-symbols-outlined">chevron_right</span>
				</button>
			</div>
		</div>
	</section>
</div>
