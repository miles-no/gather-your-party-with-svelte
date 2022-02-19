<script lang="ts">
	import type { Character } from '$lib/types/character';
	import CharacterPreview from '$lib/components/character-preview/CharacterPreview.svelte';

	export let characters: Character[];
</script>

<div class="container">
	{#each characters ?? [] as character}
		<CharacterPreview {character} />
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 10px;
		width: 100%;
		height: 100%;
	}
</style>
