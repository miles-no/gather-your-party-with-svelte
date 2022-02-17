<script lang="ts">
	import { AttributeAllocation } from '$lib/types/attribute-allocation';

	export let id: string = undefined;
	export let attributes: AttributeAllocation;

	$: meleeDamageMin = (attributes?.strength ?? 8) * 2;
	$: meleeDamageMax = (attributes?.strength ?? 8) * 3;
	$: blockChance = 10 + (attributes?.dexterity ?? 0) * 0.5;
	$: hitpoints = (attributes?.constitution ?? 8) * 5;
	$: mana = (attributes?.wisdom ?? 8) * 10;
	$: spellpower = (attributes?.intelligence ?? 8) * 2.5;
	$: speech =
		attributes?.charisma >= 16 ? 'Charming' : attributes?.charisma >= 12 ? 'Well Spoken' : 'Timid';
</script>

<div {id} class="container">
	<span class="name">Melee Damage</span><span class="value"
		>{meleeDamageMin} - {meleeDamageMax}</span
	>
	<span class="name">Block Chance</span><span class="value">{blockChance}%</span>
	<span class="name">Hitpoints</span><span class="value">{hitpoints}</span>

	<span class="name">Mana</span><span class="value">{mana}</span>
	<span class="name">Spellpower</span><span class="value">{spellpower}</span>
	<span class="name">Speech</span><span class="value">{speech}</span>
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
