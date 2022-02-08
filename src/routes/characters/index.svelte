<script lang="ts">
	import { ApiService, RESPONSE_STATUSES } from '$lib/utils/ApiService';
	import { Character } from '$lib/types/character';
	import CharacterPreviewList from '$lib/components/character-preview-list/CharacterPreviewList.svelte';
	import Loader from '$lib/components/loader/Loader.svelte';

	const fetchCharacters = new ApiService<Character[]>();
	const { isLoading, responseStatus, _response: characters } = fetchCharacters;

	fetchCharacters.fetch('/api/characters', { method: 'GET' }).catch((error) => {
		console.error(error);
	});
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<section class="rpgui-container framed outer-container" class:loading={$isLoading}>
	{#if $isLoading}
		<Loader class="loader" />
	{:else if $responseStatus === RESPONSE_STATUSES.Success}
		<CharacterPreviewList characters={$characters} />
	{:else if $responseStatus === RESPONSE_STATUSES.Failure}
		&cross; Error getting characters, see console for more info.
	{/if}
</section>

<style>
	.outer-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		align-items: center;
		gap: 1rem;
	}

	.loading {
		justify-content: center;
	}
</style>
