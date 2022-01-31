<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import SkillSelect from '$lib/components/skill-select/SkillSelect.svelte';
	import { CLASSES } from '$lib/models/classes';
	import { RACES } from '$lib/models/races';
	import type { Character } from '$lib/types/character';
	import type { Class } from '$lib/types/class';
	import type { Race } from '$lib/types/race';
	import type { Skill } from '$lib/types/skill';
	import { ApiService, RESPONSE_STATUSES } from '$lib/utils/ApiService';

	const saveCharacterApi = new ApiService<Character>();
	const {
		isLoading: isSavingCharacter,
		responseStatus: saveCharacterStatus,
		response: savedCharacterResponse,
	} = saveCharacterApi;

	let name = '';

	type RaceOption = { id: Race; name: string };
	let RACE_OPTIONS: RaceOption[] = Object.entries(RACES).map(([name, id]) => ({ id, name }));
	let race: Race;

	type ClassOption = { id: Class; name: string };
	let CLASS_OPTIONS: ClassOption[] = Object.entries(CLASSES).map(([name, id]) => ({ id, name }));

	let primaryClass: Class;
	let isDualClass = false;
	let secondaryClass: Class;

	const handleSelectPrimaryClass = () => {
		secondaryClass = null;
	};

	let skills: Skill[];

	// TODO Should we validate inputs in the frontend as well as the backend?
	const handleSubmit = () => {
		saveCharacterApi
			.fetch(
				'/api/characters',
				{
					method: 'POST',
					body: JSON.stringify({ name, race, primaryClass, secondaryClass, skills }),
				},
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
			<option value={null}>Please select...</option>

			{#each RACE_OPTIONS as { id, name }}
				<option value={id}>{name}</option>
			{/each}
		</select>
	</label>

	<label class="input select-input">
		<span>Class</span>
		<select class="interactive" bind:value={primaryClass} on:change={handleSelectPrimaryClass}>
			<option value={null}>Please select...</option>

			{#each CLASS_OPTIONS as { id, name }}
				<option value={id}>{name}</option>
			{/each}
		</select>
	</label>

	<label class="input checkbox-input">
		<span>Dual class?</span>
		<input class="interactive interactive--small" type="checkbox" bind:checked={isDualClass} />
	</label>

	{#if isDualClass}
		<label class="input select-input">
			<span>Dual class</span>
			<select class="interactive" bind:value={secondaryClass}>
				<option value={null}>Please select...</option>

				{#each CLASS_OPTIONS as { id, name }}
					<option value={id} disabled={id === primaryClass}>{name}</option>
				{/each}
			</select>
		</label>
	{/if}

	<label class="input" for="skills">
		<span>Skills</span>
		<SkillSelect id="skills" bind:value={skills} />
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
		width: 28rem;
	}
	.input > span {
		width: 8rem;
		padding-top: 0.25rem;
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

	.checkbox-input > input {
		width: calc(var(--interactive-width) + 4px);
		margin: calc(var(--interactive-margin-y) + var(--interactive-padding-y))
			calc(var(--interactive-margin-x) + var(--interactive-padding-x));
		padding: 0;
	}
</style>
