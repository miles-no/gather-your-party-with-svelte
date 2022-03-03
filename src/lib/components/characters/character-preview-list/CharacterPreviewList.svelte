<script lang="ts">
	import CharacterPreview from '$lib/components/characters/character-preview/CharacterPreview.svelte';
	import type { Character } from '$lib/types/character';

	export let characters: Character[];
</script>

<div class="container">
	{#each characters as character (character.id)}
		<CharacterPreview {character} />
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		width: 100%;
		height: 100%;
	}
</style>
