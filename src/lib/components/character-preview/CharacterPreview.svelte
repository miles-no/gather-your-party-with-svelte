<script lang="ts">
	import type { Character } from '$lib/types/character';

	export let character: Character;

	let hovered = false;
	const toggleHover = () => (hovered = !hovered);
</script>

<a
	class="character rpgui-container rpgui-cursor-point"
	href="/characters/{character.id}"
	class:framed-golden-2={!hovered}
	class:framed-golden={hovered}
	on:mouseenter={toggleHover}
	on:mouseleave={toggleHover}
>
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
