<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	interface LoadProps {
		uid: string;
	}

	export const load: Load<LoadProps, LoadProps> = async ({ params }) => ({
		props: { uid: params.uid },
	});
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Loader from '$lib/components/loader/Loader.svelte';
	import type { Character } from '$lib/types/character';
	import { apiFetch } from '$lib/utils/api-fetch';

	export let uid: string;

	let getCharacterPromise: Promise<Character> = new Promise(() => {});

	onMount(() => {
		getCharacterPromise = apiFetch<Character>(`/api/characters/${uid}`);
	});
</script>

<svelte:head>
	{#await getCharacterPromise}
		<title>Loading character...</title>
	{:then character}
		<title>{character.name}</title>
	{:catch error}
		<title>Character not found</title>
	{/await}
</svelte:head>

{#await getCharacterPromise}
	<Loader />
{:then character}
	<pre><code>{JSON.stringify(character, undefined, 2)}</code></pre>
{:catch error}
	<p>Could not fetch character.</p>
{/await}

<style>
</style>
