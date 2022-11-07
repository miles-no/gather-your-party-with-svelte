<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import Loader from '$lib/components/loader/Loader.svelte';
	import type { Character } from '$lib/types/character';
	import { apiFetch } from '$lib/utils/api-fetch';

	export let data: PageData;

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	let getCharacterPromise: Promise<Character> = new Promise(() => {});

	onMount(() => {
		getCharacterPromise = apiFetch<Character>(`/api/characters/${data.uid}`);
	});
</script>

<svelte:head>
	{#await getCharacterPromise}
		<title>Loading character...</title>
	{:then character}
		<title>{character.name}</title>
	{:catch _}
		<title>Character not found</title>
	{/await}
</svelte:head>

{#await getCharacterPromise}
	<Loader />
{:then character}
	<pre><code>{JSON.stringify(character, undefined, 2)}</code></pre>
{:catch _}
	<p>Could not fetch character.</p>
{/await}

<style>
</style>
