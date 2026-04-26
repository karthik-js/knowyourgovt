<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Error - Know Your Government</title>
</svelte:head>

<div class="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
	<span class="material-symbols-outlined mb-4 text-6xl text-slate-300">error_outline</span>
	<h1 class="mb-2 font-serif text-3xl font-bold text-on-surface">{page.status}</h1>
	<p class="mb-8 max-w-md font-sans text-base leading-relaxed text-slate-500">
		{page.error?.message || 'Something went wrong. Please try again later.'}
	</p>
	<div class="flex items-center gap-4">
		<a href="/go-directory" class="btn-primary px-6 py-3 text-sm">
			GO Directory
		</a>
		<a href="/" class="btn-outline px-6 py-3 text-sm">
			Home
		</a>
	</div>
</div>
