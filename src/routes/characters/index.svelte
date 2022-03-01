<script lang="ts">
	import { apiFetch } from '$lib/utils/api-fetch';
	import type { Character } from '$lib/types/character';
	import CharacterPreviewList from '$lib/components/character-preview-list/CharacterPreviewList.svelte';
	import Loader from '$lib/components/loader/Loader.svelte';
	import { onMount } from 'svelte';

	let getCharactersPromise: Promise<Character[]> = Promise.resolve([]);

	onMount(() => {
		getCharactersPromise = apiFetch<Character[]>('/api/characters');
	});
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<section class="rpgui-container framed container">
	{#await getCharactersPromise}
		<Loader />
	{:then characters}
		<CharacterPreviewList {characters} />
	{:catch error}
		&cross; Error getting characters, see console for more info.
	{/await}
</section>

<style>
	.container {
		display: flex;
		flex-grow: 1;
	}
</style>
