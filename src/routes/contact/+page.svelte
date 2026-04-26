<script lang="ts">
	let name = $state('');
	let email = $state('');
	let subject = $state('Legislative Record Request');
	let message = $state('');
	let privacyAcknowledged = $state(false);
</script>

<svelte:head>
	<title>Contact Us - Know Your Government</title>
</svelte:head>

<div class="mx-auto w-full max-w-[1440px] px-8 pb-16 pt-12">
	<!-- Header Section -->
	<header class="mb-12 text-center">
		<h1 class="mb-4 font-serif text-[28px] font-bold leading-tight text-primary">Contact Our Institution</h1>
		<p class="mx-auto max-w-2xl font-sans text-[15px] leading-relaxed text-on-surface-variant">
			The Know Your Government portal is dedicated to institutional transparency. Reach out to our administrative offices for inquiries regarding public records, legislative updates, or technical assistance.
		</p>
	</header>

	<div class="mx-auto max-w-3xl">
		<!-- Contact Form -->
		<div class="border border-outline-variant bg-white p-5 shadow-sm">
			<h2 class="mb-6 border-b border-surface-variant pb-4 font-serif text-xl font-bold">Administrative Inquiry Form</h2>
			<form class="space-y-6" onsubmit={(e) => e.preventDefault()}>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div class="flex flex-col gap-2">
						<label class="font-sans text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" for="name">Full Name</label>
						<input
							class="form-input font-sans text-sm"
							id="name"
							type="text"
							placeholder="John A. Citizen"
							bind:value={name}
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label class="font-sans text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" for="email">Official Email Address</label>
						<input
							class="form-input font-sans text-sm"
							id="email"
							type="email"
							placeholder="citizen@example.gov"
							bind:value={email}
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<label class="font-sans text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" for="subject">Subject of Inquiry</label>
					<select
						class="form-input appearance-none bg-white font-sans text-sm"
						id="subject"
						bind:value={subject}
					>
						<option>Legislative Record Request</option>
						<option>Departmental Directory Correction</option>
						<option>Technical Portal Support</option>
						<option>General Administrative Question</option>
					</select>
				</div>

				<div class="flex flex-col gap-2">
					<label class="font-sans text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant" for="message">Message Detail</label>
					<textarea
						class="form-input resize-none font-sans text-sm"
						id="message"
						rows="6"
						placeholder="Please provide a detailed description of your inquiry..."
						bind:value={message}
					></textarea>
				</div>

				<div class="flex items-center gap-3 py-2">
					<input
						class="h-5 w-5 rounded border-outline text-primary focus:ring-primary"
						id="privacy"
						type="checkbox"
						bind:checked={privacyAcknowledged}
					/>
					<label class="font-sans text-xs font-medium text-on-surface-variant" for="privacy">
						I acknowledge that this communication is subject to public record retention policies.
					</label>
				</div>

				<button
					type="submit"
					class="btn-primary flex w-full items-center justify-center gap-2 px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-wider md:w-auto"
				>
					Submit Official Inquiry
					<span class="material-symbols-outlined text-sm">send</span>
				</button>
			</form>
		</div>
	</div>
</div>
