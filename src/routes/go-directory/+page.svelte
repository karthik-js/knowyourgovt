<script lang="ts">
	import GOCard from '$lib/components/GOCard.svelte';

	const orders = [
		{
			number: 'G.O.Ms.No. 42',
			date: '24 Oct 2023',
			title: 'Revised Administrative Sanction for Construction of Medical College',
			description:
				'Health, Medical & Family Welfare Department - Revised Administrative Sanction accorded for construction of new Medical College and General Hospital at an estimated cost of Rs. 450 Crores.',
			department: 'HM&FW',
			type: 'Routine'
		},
		{
			number: 'G.O.Rt.No. 115',
			date: '18 Oct 2023',
			title: 'Constitution of State Level Steering Committee for Smart Cities',
			description:
				'Municipal Administration and Urban Development - Formation of State Level Steering Committee to oversee implementation of Smart City Projects in designated urban local bodies across the state.',
			department: 'MA&UD',
			type: 'Policy'
		},
		{
			number: 'G.O.Ms.No. 89',
			date: '05 Oct 2023',
			title: 'Release of Funds for Kharif Season Crop Insurance',
			description:
				'Agriculture & Cooperation Department - Administrative sanction and release of Rs. 1200 Crores towards state share of premium for implementing crop insurance scheme for the current Kharif season.',
			department: 'Agriculture',
			type: 'Financial'
		}
	];
</script>

<svelte:head>
	<title>GO Directory - Know Your Government</title>
</svelte:head>

<div class="mx-auto flex w-full max-w-[1440px] flex-grow flex-col gap-6 px-12 py-20 md:flex-row">
	<!-- Sidebar Filters -->
	<aside class="flex w-full flex-shrink-0 flex-col gap-6 md:w-64 md:pr-6">
		<div>
			<h2 class="mb-2 border-b border-black pb-1 font-sans text-sm font-semibold uppercase text-black" style="letter-spacing: 0.06em;">
				Date Range
			</h2>
			<div class="flex flex-col gap-1">
				<div class="w-full">
					<label class="mb-1 block font-sans text-xs uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;" for="start-date">From</label>
					<input
						class="w-full rounded-none border-0 border-b border-black bg-transparent px-0 py-1 font-serif text-base focus:border-b-2 focus:border-black focus:ring-0"
						style="border-bottom-width: 0.5px;"
						id="start-date"
						type="date"
					/>
				</div>
				<div class="mt-2 w-full">
					<label class="mb-1 block font-sans text-xs uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;" for="end-date">To</label>
					<input
						class="w-full rounded-none border-0 border-b border-black bg-transparent px-0 py-1 font-serif text-base focus:border-b-2 focus:border-black focus:ring-0"
						style="border-bottom-width: 0.5px;"
						id="end-date"
						type="date"
					/>
				</div>
				<button class="mt-6 w-full border border-black bg-black py-2 font-sans text-sm font-semibold uppercase text-white transition-none hover:bg-white hover:text-black" style="letter-spacing: 0.06em;">
					Apply Filter
				</button>
			</div>
		</div>
	</aside>

	<!-- Directory Content -->
	<div class="flex flex-grow flex-col gap-12">
		<!-- Search & Meta -->
		<div class="flex flex-col gap-6 pb-6">
			<h1 class="font-serif text-5xl font-semibold leading-[1.1] text-black" style="letter-spacing: -0.02em;">
				Government Orders Directory
			</h1>
			<div class="relative w-full">
				<input
					class="w-full rounded-none bg-[#f5f3ee] py-3 pl-12 pr-4 font-serif text-xl transition-none focus:bg-[#eae8e3] focus:ring-0"
					placeholder="Search by GO Number, Subject, or Department..."
					type="text"
				/>
				<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5f5e5e]">search</span>
			</div>
			<div class="flex items-center justify-between font-sans text-xs uppercase text-[#5f5e5e]" style="letter-spacing: 0.04em;">
				<span>Showing 1-10 of 1,245 Orders</span>
				<span>Sorted by: Date (Newest First)</span>
			</div>
		</div>

		<!-- GO Feed -->
		<div class="flex flex-col gap-6">
			{#each orders as order (order.number)}
				<GOCard {order} />
			{/each}
		</div>

		<!-- Pagination -->
		<div class="mt-6 flex items-center justify-center gap-4 font-sans text-sm font-semibold uppercase" style="letter-spacing: 0.06em;">
			<button class="cursor-not-allowed rounded-md px-4 py-2 text-[#5f5e5e] opacity-50 transition-colors hover:bg-[#f5f3ee]" disabled>
				Previous
			</button>
			<span class="font-bold text-black">Page 1 of 125</span>
			<button class="rounded-md px-4 py-2 text-black transition-colors hover:bg-[#f0eee9]">
				Next
			</button>
		</div>
	</div>
</div>
