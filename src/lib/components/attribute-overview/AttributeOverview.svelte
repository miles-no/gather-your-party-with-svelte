<script lang="ts">
	import AttributePicker from '$lib/components/attribute-picker/AttributePicker.svelte';
	import { AttributeAllocation } from '$lib/types/attribute-allocation';
	import type { Attribute } from '$lib/types/attribute';

	const STARTING_VALUE = 8;
	const POINTS_TO_DISTRIBUTE = 20;

	export let id: string = undefined;

	export let attributes: AttributeAllocation = {
		charisma: STARTING_VALUE,
		constitution: STARTING_VALUE,
		intelligence: STARTING_VALUE,
		dexterity: STARTING_VALUE,
		strength: STARTING_VALUE,
		wisdom: STARTING_VALUE,
	};

	let pointsRemaining = POINTS_TO_DISTRIBUTE;

	const subtractPoint = (key: Attribute) => {
		if (pointsRemaining >= POINTS_TO_DISTRIBUTE || attributes[key] <= STARTING_VALUE) {
			return;
		}
		attributes[key]--;
		pointsRemaining++;
	};

	const addPoint = (key: Attribute) => {
		if (pointsRemaining <= 0) {
			return;
		}
		attributes[key]++;
		pointsRemaining--;
	};
</script>

<div class="container" {id}>
	<span>Points to distribute: {pointsRemaining}</span>
	{#each Object.entries(attributes) as [name, value]}
		<AttributePicker
			{name}
			{value}
			disableMin={STARTING_VALUE === name}
			disableMax={0 === pointsRemaining}
			on:subtract={() => subtractPoint(name)}
			on:add={() => addPoint(name)}
		/>
	{/each}
</div>
