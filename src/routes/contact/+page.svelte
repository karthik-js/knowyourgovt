<script lang="ts">
	let name = $state('');
	let email = $state('');
	let inquiryType = $state('');
	let message = $state('');
</script>

<svelte:head>
	<title>Contact Us - Know Your Government</title>
</svelte:head>

<div class="mx-auto w-full max-w-[1440px] flex-grow px-12 py-20">
	<div class="mx-auto max-w-2xl">
	<div class="mb-12 text-center">
		<h1 class="mb-2 font-serif text-5xl font-semibold leading-[1.1] text-black" style="letter-spacing: -0.02em;">
			Contact Us
		</h1>
		<p class="mb-6 font-serif text-base text-[#444748]">Administrative Inquiry Form</p>
		<hr class="academic-rule mx-auto w-24" />
	</div>

	<form class="flex flex-col gap-8" onsubmit={(e) => e.preventDefault()}>
		<div>
			<label class="mb-1 block font-sans text-xs uppercase text-black" style="letter-spacing: 0.04em;" for="fullname">
				Full Name
			</label>
			<input
				type="text"
				id="fullname"
				bind:value={name}
				class="academic-input w-full py-2 font-serif text-base text-black"
			/>
		</div>

		<div>
			<label class="mb-1 block font-sans text-xs uppercase text-black" style="letter-spacing: 0.04em;" for="email">
				Email Address
			</label>
			<input
				type="email"
				id="email"
				bind:value={email}
				class="academic-input w-full py-2 font-serif text-base text-black"
			/>
		</div>

		<div>
			<label class="mb-1 block font-sans text-xs uppercase text-black" style="letter-spacing: 0.04em;" for="type">
				Inquiry Type
			</label>
			<select
				id="type"
				bind:value={inquiryType}
				class="academic-input w-full appearance-none bg-transparent py-2 font-serif text-base text-black"
			>
				<option value="" disabled>Select an inquiry type</option>
				<option value="general">General Inquiry</option>
				<option value="correction">Data Correction</option>
				<option value="feedback">Methodological Feedback</option>
				<option value="partnership">Partnership</option>
				<option value="other">Other</option>
			</select>
		</div>

		<div>
			<label class="mb-1 block font-sans text-xs uppercase text-black" style="letter-spacing: 0.04em;" for="message">
				Message
			</label>
			<textarea
				id="message"
				rows="5"
				bind:value={message}
				class="w-full resize-none border border-[#c4c7c7] bg-transparent p-3 font-serif text-base text-black outline-none focus:border-black"
			></textarea>
		</div>

		<div class="flex justify-end">
			<button
				type="submit"
				class="button-primary px-8 py-3 font-sans text-sm font-semibold uppercase tracking-widest"
			>
				Submit Inquiry
			</button>
		</div>
	</form>
	</div>
</div>
