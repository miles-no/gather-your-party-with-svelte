<script lang="ts">
	import AttributePicker from '$lib/components/attribute-picker/AttributePicker.svelte';
	import { AttributeAllocation } from '$lib/types/attribute-allocation';
	import type { Attribute } from '$lib/types/attribute';
	import { ATTRIBUTES } from '$lib/models/attributes';

	const STARTING_VALUE = 8;
	const POINTS_TO_DISTRIBUTE = 20;

	export let id: string = undefined;

	export let attributes: AttributeAllocation = {
		[ATTRIBUTES.Charisma]: STARTING_VALUE,
		[ATTRIBUTES.Constitution]: STARTING_VALUE,
		[ATTRIBUTES.Intelligence]: STARTING_VALUE,
		[ATTRIBUTES.Dexterity]: STARTING_VALUE,
		[ATTRIBUTES.Strength]: STARTING_VALUE,
		[ATTRIBUTES.Wisdom]: STARTING_VALUE,
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
			disableMin={STARTING_VALUE === value}
			disableMax={0 === pointsRemaining}
			on:subtract={() => subtractPoint(name)}
			on:add={() => addPoint(name)}
		/>
	{/each}
</div>
