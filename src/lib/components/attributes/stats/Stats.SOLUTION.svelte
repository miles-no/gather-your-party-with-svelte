<script lang="ts">
	import type { AttributeAllocation } from '$lib/types/attribute-allocation';

	export let id: string;
	export let attributes: AttributeAllocation;

	$: meleeDamageMin = attributes.strength * 2;
	$: meleeDamageMax = attributes.strength * 3;
	$: blockChance = attributes.dexterity * 0.5;
	$: hitpoints = attributes.constitution * 5;
	$: mana = attributes.wisdom * 10;
	$: spellpower = attributes.intelligence * 2.5;
	$: speech =
		attributes.charisma >= 16 ? 'Charming' : attributes.charisma >= 12 ? 'Well Spoken' : 'Timid';
</script>

<div {id} class="container">
	<span>Melee Damage</span><span class="value">{meleeDamageMin} - {meleeDamageMax}</span>
	<span>Block Chance</span><span class="value">{blockChance}%</span>
	<span>Hitpoints</span><span class="value">{hitpoints}</span>
	<span>Mana</span><span class="value">{mana}</span>
	<span>Spellpower</span><span class="value">{spellpower}</span>
	<span>Speech</span><span class="value">{speech}</span>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 175px 100px;
		grid-auto-rows: 30px;
		margin: auto;
	}

	.value {
		white-space: nowrap;
	}
</style>
