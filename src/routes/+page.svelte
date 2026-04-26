<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Know Your Government | Modern Government Portal</title>
</svelte:head>

<div class="mx-auto w-full max-w-[1440px] px-6 py-12">
	<!-- Hero Section -->
	<section class="mb-16 mx-auto max-w-3xl text-center">
		<h1 class="mb-6 font-serif text-5xl leading-tight text-primary">Understanding Your Government.</h1>
		<p class="font-sans text-[15px] leading-relaxed text-on-surface-variant">
			Radical transparency and seamless accessibility to official Government Orders. Know Your Government bridges the gap between administrative documentation and public awareness.
		</p>
	</section>

	<!-- Mission & Purpose Section -->
	<section class="mb-16 rounded-2xl border border-primary-container/10 bg-primary-container/5 p-8 md:p-12">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 font-serif text-3xl text-primary">Mission &amp; Purpose</h2>
			<p class="mb-4 font-sans text-lg leading-relaxed text-on-surface">
				Know Your Government is built on the belief that a well-informed citizenry is the bedrock of democracy. Our portal is meticulously designed for <strong>radical government transparency</strong> and <strong>citizen empowerment</strong>.
			</p>
			<p class="mx-auto max-w-2xl font-sans text-sm text-on-surface-variant">
				We simplify the often opaque world of administrative directives, making every public policy, executive order, and legislative change accessible, searchable, and understandable for every citizen.
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
	<section class="mb-20 rounded-2xl border border-outline-variant bg-surface-container-low p-8 md:p-12">
		<div class="mx-auto max-w-2xl">
			<h2 class="mb-4 text-center font-serif text-3xl text-primary">Help Us Improve</h2>
			<p class="mb-8 text-center font-sans text-sm text-on-surface-variant">Share your feedback or suggest new features to help us make government data more accessible for everyone.</p>
			<form onsubmit={(e) => e.preventDefault()} class="space-y-4">
				<textarea
					class="form-input min-h-[120px] w-full resize-none rounded-xl border border-outline-variant bg-white p-4 font-sans text-sm"
					placeholder="Tell us what you think or what features you'd like to see..."
				></textarea>
				<div class="flex justify-center">
					<button type="submit" class="btn-primary px-8 py-3 font-sans text-[13px] font-semibold uppercase tracking-wider">
						Submit Feedback
					</button>
				</div>
			</form>
		</div>
	</section>
</div>
