<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { RACES } from '$lib/models/races';
	import type { Race } from '$lib/types/race';

	let name = '';

	type RaceOption = { id: Race; name: string };
	let RACE_OPTIONS: RaceOption[] = [
		{ id: RACES.Human, name: 'Human' },
		{ id: RACES.Elf, name: 'Elf' },
		{ id: RACES.Dwarf, name: 'Dwarf' },
		{ id: RACES.Orc, name: 'Orc' },
	];
	let race = RACES.Human;

	type SubmissionStatus = 'success' | 'failure';
	const SUBMISSION_STATUSES: { [key: string]: SubmissionStatus } = {
		Success: 'success',
		Failure: 'failure',
	};
	let submissionStatus: SubmissionStatus;

	const clearSubmissionStatusAfterDelay = (delay = 5000) => {
		setTimeout(() => {
			submissionStatus = undefined;
		}, delay);
	};

	const handleSubmit = () => {
		fetch('/api/characters', { method: 'POST', body: JSON.stringify({ name, race }) }).then(
			async (response) => {
				if (response.status >= 400) {
					console.error(await response.text());

					submissionStatus = SUBMISSION_STATUSES.Failure;
					clearSubmissionStatusAfterDelay();
				} else {
					submissionStatus = SUBMISSION_STATUSES.Success;
					clearSubmissionStatusAfterDelay();
				}
			},
		);
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
			{#each RACE_OPTIONS as { id, name }}
				<option value={id}>{name}</option>
			{/each}
		</select>
	</label>

	<Button on:click={handleSubmit}>Save</Button>

	{#if submissionStatus === SUBMISSION_STATUSES.Success}
		Character saved!
	{:else if submissionStatus === SUBMISSION_STATUSES.Failure}
		Error saving character
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
		height: var(--interactive-height);
		width: var(--interactive-width);
		margin: 0;
		padding: var(--interactive-padding-y) var(--interactive-padding-x);
		border: var(--interactive-border);
		border-radius: var(--interactive-border-radius);
		font-size: 100%;
	}

	.select-input > select {
		height: calc(var(--interactive-height) + 4px);
		width: calc(var(--interactive-width) + 1.25rem);
		padding: var(--interactive-padding-y) calc(var(--interactive-padding-x) - 0.15rem);
	}
</style>
