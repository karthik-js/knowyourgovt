<script lang="ts">
	import GOCard from '$lib/components/GOCard.svelte';
	import { goto } from '$app/navigation';
	import { navigating } from '$app/state';

	let { data } = $props();
	let loading = $derived(!!navigating.to);

	let showFilters = $state(false);
	let searchQuery = $state(data.search || '');
	let selectedYear = $state(data.year || '');
	let sortOrder = $state(data.sort || 'desc');

	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: currentYear - 1947 + 1 }, (_, i) => String(currentYear - i));

	function applyFilters() {
		const params = new URLSearchParams();
		if (selectedYear) params.set('year', selectedYear);
		if (searchQuery.trim()) params.set('search', searchQuery.trim());
		if (sortOrder !== 'desc') params.set('sort', sortOrder);
		const qs = params.toString();
		goto(`/go-directory${qs ? `?${qs}` : ''}`, { invalidateAll: true });
	}

	function clearFilters() {
		searchQuery = '';
		selectedYear = '';
		sortOrder = 'desc';
		goto('/go-directory', { invalidateAll: true });
	}

	let searchTimeout: ReturnType<typeof setTimeout>;
	function onSearchInput() {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => applyFilters(), 400);
	}
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
				<span class="block font-sans text-[13px] font-semibold uppercase tracking-wider text-slate-400">YEAR</span>
				<select
					bind:value={selectedYear}
					class="form-input w-full px-2 py-2 text-sm"
				>
					<option value="">All Years</option>
					{#each years as yr (yr)}
						<option value={yr}>{yr}</option>
					{/each}
				</select>
			</div>
		</div>
		<div class="mt-4 flex gap-2 px-2">
			<button
				onclick={applyFilters}
				disabled={loading}
				class="flex-1 rounded-lg bg-primary-container py-2 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
			>
				{#if loading}
					<span class="inline-flex items-center gap-1.5">
						<span class="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
						Loading
					</span>
				{:else}
					Apply
				{/if}
			</button>
			<button
				onclick={clearFilters}
				class="rounded-lg border border-slate-200 bg-white px-3 py-2 font-sans text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
			>
				Clear
			</button>
		</div>
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
						bind:value={searchQuery}
						oninput={onSearchInput}
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
				<h3 class="font-sans text-[13px] font-semibold uppercase tracking-wider text-slate-500">{data.gos.length} GOVERNMENT ORDERS</h3>
				<div class="hidden h-px w-24 bg-slate-200 sm:block"></div>
			</div>
			<div class="flex items-center gap-2">
				<span class="font-sans text-xs text-slate-500">SORT BY:</span>
				<select
					bind:value={sortOrder}
					onchange={applyFilters}
					class="cursor-pointer border-none bg-transparent font-sans text-xs font-bold text-primary focus:ring-0"
				>
					<option value="desc">Newest First</option>
					<option value="asc">Oldest First</option>
				</select>
			</div>
		</div>

		<!-- Feed Content -->
		<div class="space-y-4 px-4 sm:px-6 md:px-10">
			{#if loading}
				{#each { length: 5 } as _}
					<div class="animate-pulse rounded-lg border border-slate-200 bg-white p-5">
						<div class="mb-3 flex items-center gap-3">
							<div class="h-5 w-14 rounded bg-slate-200"></div>
							<div class="h-4 w-20 rounded bg-slate-100"></div>
						</div>
						<div class="mb-2 h-5 w-3/4 rounded bg-slate-200"></div>
						<div class="mb-1 h-4 w-full rounded bg-slate-100"></div>
						<div class="mb-4 h-4 w-2/3 rounded bg-slate-100"></div>
						<div class="flex items-center justify-between">
							<div class="h-3 w-24 rounded bg-slate-100"></div>
							<div class="h-6 w-16 rounded-full bg-slate-100"></div>
						</div>
					</div>
				{/each}
			{:else}
				{#each data.gos as order (order.id)}
					<GOCard {order} />
				{:else}
					<div class="rounded border border-slate-200 bg-white p-10 text-center">
						<span class="material-symbols-outlined mb-2 text-4xl text-slate-300">search_off</span>
						<p class="font-sans text-sm text-slate-500">No government orders found matching your search.</p>
					</div>
				{/each}
			{/if}
		</div>
	</section>
</div>
