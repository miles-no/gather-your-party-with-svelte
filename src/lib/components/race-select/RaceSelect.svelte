<script lang="ts">
	import { RACES } from '$lib/models/races';
	import { Race } from '$lib/types/race';
	export let id: string = undefined;

	type RaceOption = { id: Race; name: string };

	let RACE_OPTIONS: RaceOption[] = Object.entries(RACES).map(([name, id]) => ({ id, name }));
	export let race: Race;
</script>

<select {id} class="rpgui-dropdown-imp input-content" bind:value={race}>
	<option value={null}>Please select...</option>

	{#each RACE_OPTIONS as { id, name }}
		<option value={id}>{name}</option>
	{/each}
</select>

<style>
	.input-content {
		margin: auto;
	}
</style>
