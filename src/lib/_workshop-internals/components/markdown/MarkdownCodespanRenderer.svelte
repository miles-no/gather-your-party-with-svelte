<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import { say } from 'cowsay2';
	import { onMount } from 'svelte';
	import type { Hints } from '$lib/_workshop-internals/types/hints';

	export let raw = '';
	export let hints: Hints = undefined;

	$: rawSanitized = raw.replace(/`/g, '');
	$: hintKey = rawSanitized.match(/^npm run hint (t?\d+\w)$/)?.[1];

	let hint: string;

	onMount(async () => {
		if (!hintKey) {
			return;
		}

		const hintsRaw = await fetch('/hints.js');
		const hintsText = await hintsRaw.text();
		hints = eval(hintsText.replace('export const ', ''));
	});

	const handleShowHint = () => {
		hint = say(hints[hintKey], { nowrap: true });
	};

	const handleCloseHint = () => {
		hint = undefined;
	};
</script>

<div class="container">
	<code>{rawSanitized}</code>
	{#if rawSanitized.startsWith('npm run hint')}
		<button class="rpgui-button rpgui-button--small show-hint-button" on:click={handleShowHint}
			>Show hint</button
		>
	{/if}
</div>

{#if hint}
	<div class="hint-container" on:click={handleCloseHint}>
		<div class="rpgui-container framed hint" on:click|stopPropagation>
			{hint}
			<button class="rpgui-button close-hint-button" on:click={handleCloseHint}>Close</button>
		</div>
	</div>
{/if}

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.show-hint-button {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1.8em;
		width: fit-content;
	}

	.hint-container {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.hint {
		position: relative;
		white-space: pre-wrap;
		font-family: monospace;
		font-size: 120%;
		line-height: 1.8em;
	}

	.close-hint-button {
		position: absolute;
		top: -2.5rem;
		right: -3.5rem;
		height: 4rem;
		width: 6rem;
		min-width: unset;
		padding: 0;
	}
</style>
