<script lang="ts">
	export let id: string = undefined;

	/**
	 * Quest 2 - Boosting our Heroes stats
	 */

	let meleeDamageMin = 1;
	let meleeDamageMax = 2;
	let blockChance = 10;
	let hitpoints = 10;
	let mana = 10;
	let spellpower = 2;
	let speech = 'Timid';
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
