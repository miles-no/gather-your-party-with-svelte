<script lang="ts">
	import AttributePicker from '$lib/components/attribute-picker/AttributePicker.svelte';
	import type { AttributeAllocation } from '$lib/types/attribute-allocation';
	import type { Attribute } from '$lib/types/attribute';
	import { ATTRIBUTES } from '$lib/models/attributes';
	import { spring } from 'svelte/motion';

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

	let pointsRemaining = POINTS_TO_DISTRIBUTE;

	let displayedAttributes = spring(value, {
		stiffness: 0.2,
	});

	let displayedPointsRemaining = spring(pointsRemaining, {
		stiffness: 0.01,
	});

	const subtractPoint = (key: Attribute) => {
		if (pointsRemaining >= POINTS_TO_DISTRIBUTE || value[key] <= STARTING_VALUE) {
			return;
		}
		value[key] -= 1;
		pointsRemaining++;
		displayedPointsRemaining.set(pointsRemaining);
		displayedAttributes.set(value);
	};

	const addPoint = (key: Attribute) => {
		if (pointsRemaining <= 0) {
			return;
		}
		value[key] += 1;
		pointsRemaining--;
		displayedPointsRemaining.set(pointsRemaining);
		displayedAttributes.set(value);
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
		displayedPointsRemaining.set(pointsRemaining);
		displayedAttributes.set(allocation);
	};
</script>

<div {id} class="container">
	<span>Points to distribute: {Math.round($displayedPointsRemaining)}</span>
	<button class="randomize-btn rpgui-button rpgui-button--small" on:click={randomize}
		>Randomize
	</button>
	{#each Object.entries($displayedAttributes) as [name, attributeValue]}
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
