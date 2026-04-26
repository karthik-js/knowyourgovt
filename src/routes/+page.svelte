<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Know Your Government | Modern Government Portal</title>
</svelte:head>

<div class="mx-auto w-full max-w-[1440px] px-6 py-12">
	<!-- Hero Section -->
	<section class="mb-16 mx-auto max-w-3xl text-left md:text-center">
		<h1 class="mb-6 font-serif text-5xl leading-tight text-primary">Understanding Your Government.</h1>
		<p class="font-serif italic text-[15px] leading-relaxed text-on-surface-variant">
			A definitive archival approach to modern civics, providing citizens with unparalleled clarity on institutional structures and administrative functions.
		</p>
	</section>

	<!-- Mission & Purpose Section -->
	<section class="mb-16">
		<div class="mx-auto max-w-4xl text-left md:text-center">
			<h2 class="squiggly-underline mb-6 inline-block font-serif text-3xl text-primary">Mission &amp; Purpose</h2>
			<p class="mb-4 font-sans text-lg leading-relaxed text-on-surface">
				In an era of fragmenting information, the <strong>Know Your Government</strong> initiative serves as a centralized, immutable repository of civic data. Our objective is to bridge the gap between administrative complexity and public comprehension through rigorous documentation.
			</p>
			<p class="max-w-2xl font-sans text-sm text-on-surface-variant md:mx-auto">
				We adhere to the highest standards of academic integrity, ensuring that every insight provided is verified, cross-referenced, and presented without bias.
			</p>
		</div>
	</section>

	<!-- Our Services Section -->
	<section class="mb-20">
		<div class="mb-10 flex items-center justify-center">
			<h2 class="flex items-center gap-2 font-serif text-2xl text-primary">
				<span class="material-symbols-outlined">auto_awesome</span> Our Services
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Service 1 -->
			<div class="rounded-xl border border-outline-variant bg-white p-8 shadow-sm transition-all hover:border-primary">
				<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed">
					<span class="material-symbols-outlined text-3xl text-primary">find_in_page</span>
				</div>
				<h3 class="mb-3 font-serif text-xl font-bold">Smart GO Directory</h3>
				<p class="font-sans text-sm text-on-surface-variant">
					Instant access to thousands of indexed government orders. Our powerful search engine filters by department, date, and keyword with sub-second latency.
				</p>
			</div>
			<!-- Service 2 -->
			<div class="rounded-xl border border-outline-variant bg-white p-8 shadow-sm transition-all hover:border-primary">
				<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-fixed">
					<span class="material-symbols-outlined text-3xl text-secondary">psychology</span>
				</div>
				<h3 class="mb-3 font-serif text-xl font-bold">AI-Powered Insights</h3>
				<p class="font-sans text-sm text-on-surface-variant">
					Complex legal jargon simplified. Get automated summaries and key takeaway extraction for dense administrative documents, powered by state-of-the-art AI.
				</p>
			</div>
			<!-- Service 3 -->
			<div class="rounded-xl border border-outline-variant bg-white p-8 shadow-sm transition-all hover:border-primary">
				<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-tertiary-fixed">
					<span class="material-symbols-outlined text-3xl text-tertiary">public</span>
				</div>
				<h3 class="mb-3 font-serif text-xl font-bold">Multi-State Support</h3>
				<p class="font-sans text-sm text-on-surface-variant">
					A unified interface designed to scale. Compare policies across state jurisdictions through a consistent, intuitive framework for nation-wide clarity.
				</p>
			</div>
		</div>
	</section>

	<!-- Feedback Section -->
	<section class="mb-20">
		<div class="mx-auto max-w-2xl">
			<h2 class="mb-4 text-left font-serif text-3xl text-primary md:text-center">Help Us Improve</h2>
			<p class="mb-8 text-left font-sans text-sm text-on-surface-variant md:text-center">Share your feedback or suggest new features to help us make government data more accessible for everyone.</p>
			<form onsubmit={(e) => e.preventDefault()} class="space-y-4">
				<textarea
					class="form-input min-h-[120px] w-full resize-none rounded-xl border border-outline-variant bg-white p-4 font-sans text-sm"
					placeholder="Tell us what you think or what features you'd like to see..."
				></textarea>
				<div class="flex justify-end">
					<button type="submit" class="btn-primary px-8 py-3 font-sans text-[13px] font-semibold uppercase tracking-wider">
						Submit Feedback
					</button>
				</div>
			</form>
		</div>
	</section>
</div>
