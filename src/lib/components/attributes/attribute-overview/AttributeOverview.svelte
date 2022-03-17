<script lang="ts">
	import AttributePicker from '$lib/components/attributes/attribute-picker/AttributePicker.svelte';
	import { INITIAL_ATTRIBUTES } from '$lib/constants/initial-attributes';
	import { ATTRIBUTES } from '$lib/models/attributes';
	import type { Attribute } from '$lib/types/attribute';
	import type { AttributeAllocation } from '$lib/types/attribute-allocation';

	const STARTING_VALUE = 8;
	const POINTS_TO_DISTRIBUTE = 20;

	const initialAllocation: AttributeAllocation = INITIAL_ATTRIBUTES;

	export let id: string = undefined;
	export let value: AttributeAllocation = { ...initialAllocation };

	/**
	 * Quest 5 - Indecisive Heroes
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

	const randomize = () => {
		const allocation = { ...initialAllocation };
		const attributeNames = Object.values(ATTRIBUTES);

		for (let count = 0; count < POINTS_TO_DISTRIBUTE; count++) {
			const randomAttribute = attributeNames[(Math.random() * attributeNames.length) | 0];
			allocation[randomAttribute]++;
		}

		pointsRemaining = 0;
		value = allocation;
	};

	function getAttributes(displayedAttributes: AttributeAllocation): [Attribute, number][] {
		return Object.entries(displayedAttributes) as [Attribute, number][];
	}
</script>

<div {id} class="container">
	<span>Points to distribute: {pointsRemaining}</span>
	<button class="randomize-btn rpgui-button rpgui-button--small" on:click={randomize}
		>Randomize</button
	>
	{#each getAttributes(value) as [name, attributeValue]}
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
