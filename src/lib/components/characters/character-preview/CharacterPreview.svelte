<script lang="ts">
	import PortraitPreview from '$lib/components/portraits/portrait-preview/PortraitPreview.svelte';
	import type { Character } from '$lib/types/character';

	export let character: Character;

	let hovered = false;

	const toggleHover = () => {
		hovered = !hovered;
	};
</script>

<a
	class="character rpgui-container rpgui-cursor-point"
	href="/characters/{character.id}"
	class:framed-golden-2={!hovered}
	class:framed-golden={hovered}
	on:mouseenter={toggleHover}
	on:mouseleave={toggleHover}
>
	<div class="portrait-container">
		<PortraitPreview value={character.portrait} />
	</div>
	<span class="name">{character.name}</span>
	<span class="race">{character.race}</span>
	<span class="classes">
		<span class="class">{character.primaryClass}</span>
		{#if character.secondaryClass}(<span class="class">{character.secondaryClass}</span>){/if}
	</span>
</a>

<style>
	.character {
		display: flex;
		flex-direction: column;
	}

	.character:hover {
		text-decoration: none;
	}

	.portrait-container {
		display: flex;
		justify-content: center;
		margin-bottom: 0.5rem;
	}

	.name {
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 0.125em;
		text-align: center;
	}

	.race {
		text-align: center;
		text-transform: capitalize;
	}

	.classes {
		text-align: center;
	}

	.class {
		text-transform: capitalize;
	}
</style>
