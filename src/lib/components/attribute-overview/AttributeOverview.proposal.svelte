<script lang="ts">
	import AttributePicker from '$lib/components/attribute-picker/AttributePicker.svelte';
	import { AttributeAllocation } from '$lib/types/attribute-allocation';
	import type { Attribute } from '$lib/types/attribute';
	import { ATTRIBUTES } from '$lib/models/attributes';

	const STARTING_VALUE = 8;
	const POINTS_TO_DISTRIBUTE = 20;

	const initialAllocation: AttributeAllocation = {
		[ATTRIBUTES.Strength]: STARTING_VALUE,
		[ATTRIBUTES.Dexterity]: STARTING_VALUE,
		[ATTRIBUTES.Constitution]: STARTING_VALUE,
		[ATTRIBUTES.Wisdom]: STARTING_VALUE,
		[ATTRIBUTES.Intelligence]: STARTING_VALUE,
		[ATTRIBUTES.Charisma]: STARTING_VALUE,
	};

	export let id: string = undefined;
	export let value: AttributeAllocation = { ...initialAllocation };

	/**
	 * Quest 4 - Indecisive Heroes
	 */

	let pointsRemaining = POINTS_TO_DISTRIBUTE;

	const subtractPoint = (key: Attribute) => {
		if (pointsRemaining >= POINTS_TO_DISTRIBUTE || value[key] <= STARTING_VALUE) {
			return;
		}
		value[key] -= 1;
		pointsRemaining++;
	};

	const addPoint = (key: Attribute) => {
		if (pointsRemaining <= 0) {
			return;
		}
		value[key] += 1;
		pointsRemaining--;
	};

	const randomize = () => {};
</script>

<div {id} class="container">
	<span>Points to distribute: {pointsRemaining}</span>
	<button class="randomize-btn rpgui-button rpgui-button--small" on:click={randomize}
		>Randomize
	</button>
	{#each Object.entries(value) as [name, attributeValue]}
		<AttributePicker
			{name}
			value={Math.round(attributeValue)}
			disableMin={STARTING_VALUE === value[name]}
			disableMax={0 === pointsRemaining}
			on:subtract={() => subtractPoint(name)}
			on:add={() => addPoint(name)}
		/>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		margin: auto;
	}

	.randomize-btn {
		margin: 0.5em 0;
	}
</style>
