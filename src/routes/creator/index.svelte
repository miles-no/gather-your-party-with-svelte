<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { RACES } from '$lib/models/races';
	import type { Character } from '$lib/types/character';
	import type { Race } from '$lib/types/race';
	import { ApiService, RESPONSE_STATUSES } from '$lib/utils/ApiService';

	const saveCharacterApi = new ApiService();
	const { isLoading: isSavingCharacter, responseStatus: saveCharacterStatus } = saveCharacterApi;
	const savedCharacterResponse = saveCharacterApi.response as Character;

	let name = '';

	type RaceOption = { id: Race; name: string };
	let RACE_OPTIONS: RaceOption[] = [
		{ id: RACES.Human, name: 'Human' },
		{ id: RACES.Elf, name: 'Elf' },
		{ id: RACES.Dwarf, name: 'Dwarf' },
		{ id: RACES.Orc, name: 'Orc' },
	];
	let race = RACES.Human;

	const handleSubmit = () => {
		saveCharacterApi
			.fetch(
				'/api/characters',
				{ method: 'POST', body: JSON.stringify({ name, race }) },
				{ clearAfter: 5000 },
			)
			.catch((error) => {
				console.error(error);
			});
	};
</script>

<svelte:head>
	<title>Character Creator</title>
</svelte:head>

<section class="container">
	<label class="input">
		<span>Name</span>
		<input class="interactive" bind:value={name} />
	</label>

	<label class="input select-input">
		<span>Race</span>
		<select class="interactive" bind:value={race}>
			{#each RACE_OPTIONS as { id, name }}
				<option value={id}>{name}</option>
			{/each}
		</select>
	</label>

	<Button disabled={$isSavingCharacter} on:click={handleSubmit}
		>{$isSavingCharacter ? 'Saving character...' : 'Save character'}</Button
	>

	{#if $saveCharacterStatus === RESPONSE_STATUSES.Success}
		&check; Character "{$savedCharacterResponse.name}" saved.
	{:else if $saveCharacterStatus === RESPONSE_STATUSES.Failure}
		&cross; Error saving character, see console for more info.
	{/if}
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.input {
		display: flex;
		align-items: center;
	}
	.input > span {
		width: 4rem;
	}
	.input > input,
	.input > select {
		font-size: 100%;
	}

	.select-input > select {
		height: calc(var(--interactive-height) + 4px);
		width: calc(var(--interactive-width) + 1.25rem);
		padding: var(--interactive-padding-y) calc(var(--interactive-padding-x) - 0.15rem);
	}
</style>
