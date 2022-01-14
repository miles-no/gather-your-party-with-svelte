<script context="module" lang="ts">
</script>

<script lang="ts">
	import { RACES } from '$lib/models/races';
	import type { Race } from '$lib/types/race';

	let name = '';

	type RaceOption = { id: Race; name: string };
	let raceOptions: RaceOption[] = [
		{ id: RACES.Human, name: 'Human' },
		{ id: RACES.Elf, name: 'Elf' },
		{ id: RACES.Dwarf, name: 'Dwarf' },
		{ id: RACES.Orc, name: 'Orc' },
	];
	let race = RACES.Human;

	let submissionStatus: string;

	const handleSubmit = () => {
		fetch('/api/characters', { method: 'POST', body: JSON.stringify({ name, race }) })
			.then(() => {
				submissionStatus = 'success';
			})
			// TODO Fix that errors doesn't result in a catch
			.catch(() => {
				console.log('ERROR!');
				submissionStatus = 'failure';
			});
	};
</script>

<svelte:head>
	<title>Character Creator</title>
</svelte:head>

<section class="container">
	<label class="input text-input">
		<span>Name</span>
		<input bind:value={name} />
	</label>

	<label class="input select-input">
		<span>Race</span>
		<select bind:value={race}>
			{#each raceOptions as { id, name }}
				<option value={id}>{name}</option>
			{/each}
		</select>
	</label>

	<button class="button" on:click={handleSubmit}>Save</button>

	{#if submissionStatus === 'success'}
		Character saved!
	{:else if submissionStatus === 'failure'}
		Error saving character
	{/if}
</section>

<style>
	:root {
		--interactive-height: 40px;
		--interactive-width: 12rem;
		--interactive-padding-y: 0;
		--interactive-padding-x: 0.5rem;
		--interactive-border: 2px solid black;
		--interactive-border-radius: 4px;
	}

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
		height: var(--interactive-height);
		width: var(--interactive-width);
		margin: 0;
		padding: var(--interactive-padding-y) var(--interactive-padding-x);
		border: var(--interactive-border);
		border-radius: var(--interactive-border-radius);
		font-size: 100%;
	}

	.text-input {
	}
	.text-input > span {
	}
	.text-input > input {
	}

	.select-input {
	}
	.select-input > span {
	}
	.select-input > select {
		height: calc(var(--interactive-height) + 4px);
		width: calc(var(--interactive-width) + 1.25rem);
		padding: var(--interactive-padding-y) calc(var(--interactive-padding-x) - 0.15rem);
	}

	.button {
		height: var(--interactive-height);
		width: var(--interactive-width);
		border: var(--interactive-border);
		border-radius: var(--interactive-border-radius);
		cursor: pointer;
	}
	.button:focus,
	.button:hover {
		font-weight: bold;
		box-shadow: 0 0 2px 1px gray;
	}
</style>
