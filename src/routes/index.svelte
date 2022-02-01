<script context="module" lang="ts">
	import type { Session } from '$lib/types/session';
	import type { Load } from '@sveltejs/kit';
	import SvelteMarkdown from 'svelte-markdown';

	export const prerender = true;

	export const load: Load<{ session: Session }> = async ({ session }) => ({
		props: { readme: session.readme },
	});
</script>

<script lang="ts">
	export let readme: any;
</script>

<svelte:head>
	<title>Gather your party with Svelte!</title>
</svelte:head>

<section>
	<h1>Gather your party with Svelte!</h1>

	<SvelteMarkdown source={readme} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
