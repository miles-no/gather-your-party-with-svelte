<script lang="ts">
	/**
	 * Quest 1 - Choose your origin
	 */

	import { RACES } from '$lib/models/races';
	import type { Race } from '$lib/types/race';

	type RaceOption = { id: Race; name: string };

	const RACE_OPTIONS: RaceOption[] = Object.entries(RACES).map(([name, id]) => ({ id, name }));

	export let id: string = undefined;
	let race: Race = undefined;
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
