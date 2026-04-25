<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Know Your Government</title>
</svelte:head>

<div class="mx-auto w-full max-w-[1440px] flex-grow px-12 py-20">
	<!-- Hero -->
	<section class="mb-20">
		<h1 class="mb-6 max-w-3xl font-serif text-5xl font-semibold leading-[1.1] tracking-tight text-black" style="letter-spacing: -0.02em;">
			Demystifying the Apparatus of the State.
		</h1>
		<p class="mb-12 max-w-2xl font-serif text-xl leading-relaxed text-[#444748]">
			The Know Your Government initiative exists to pierce the veil of bureaucracy. We provide
			transparent, rigorously structured access to the mechanisms, directories, and data that govern
			our civic life. Empowerment through absolute clarity.
		</p>
		<div class="flex gap-4">
			<a
				href={resolve('/go-directory')}
				class="button-primary px-6 py-3 font-sans text-sm font-semibold uppercase tracking-widest"
			>
				Access Directory
			</a>
		</div>
	</section>

	<hr class="academic-rule w-full" />

	<!-- Core Capabilities -->
	<section class="mb-20 py-12">
		<h2 class="mb-12 font-serif text-[32px] font-medium leading-[1.2] text-black" style="letter-spacing: -0.01em;">
			Core Capabilities &amp; Services
		</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each [
				{
					icon: 'library_books',
					title: 'Smart Directory',
					desc: 'An exhaustively indexed, cross-referenced catalog of departments, officials, and contact protocols across the entire federal structure.'
				},
				{
					icon: 'psychology',
					title: 'AI-Powered Insights',
					desc: 'Algorithmic distillation of complex legislative texts and committee reports into actionable, structurally sound summaries.'
				},
				{
					icon: 'map',
					title: 'Multi-State Support',
					desc: 'Comparative architectures for tracking regional variations in policy implementation and administrative law.'
				}
			] as card (card.icon)}
				<div class="academic-border flex h-full flex-col bg-[#fbf9f4] p-6">
					<span class="material-symbols-outlined mb-2 text-4xl text-black">{card.icon}</span>
					<h3 class="mb-1 font-serif text-2xl font-medium leading-snug text-black">{card.title}</h3>
					<p class="flex-grow font-serif text-base leading-relaxed text-[#444748]">{card.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<hr class="academic-rule w-full" />

	<!-- Public Discourse -->
	<section id="discourse" class="mb-20 flex flex-col gap-6 py-12 md:flex-row">
		<div class="md:w-1/3">
			<h2 class="mb-2 font-serif text-[32px] font-medium leading-[1.2] text-black" style="letter-spacing: -0.01em;">
				Public Discourse
			</h2>
			<p class="font-serif text-base leading-relaxed text-[#444748]">
				We require continuous critique to maintain the integrity of our archives. Submit inquiries,
				corrections, or methodological feedback.
			</p>
		</div>
		<div class="md:w-2/3">
			<form class="academic-border bg-[#fbf9f4] p-6" onsubmit={(e) => e.preventDefault()}>
				<div class="mb-6">
					<label class="mb-1 block font-sans text-xs uppercase text-black" style="letter-spacing: 0.04em;" for="name">
						Identification (Name/Affiliation)
					</label>
					<input
						type="text"
						id="name"
						placeholder="Optional"
						class="academic-input w-full py-2 font-serif text-base text-black"
					/>
				</div>
				<div class="mb-6">
					<label class="mb-1 block font-sans text-xs uppercase text-black" style="letter-spacing: 0.04em;" for="inquiry">
						Nature of Inquiry
					</label>
					<textarea
						id="inquiry"
						rows="4"
						placeholder="State your observations clearly..."
						class="academic-input w-full resize-none bg-transparent py-2 font-serif text-base text-black outline-none"
					></textarea>
				</div>
				<button
					type="submit"
					class="button-primary w-full px-8 py-3 font-sans text-sm font-semibold uppercase tracking-widest md:w-auto"
				>
					Submit Memorandum
				</button>
			</form>
		</div>
	</section>
</div>
