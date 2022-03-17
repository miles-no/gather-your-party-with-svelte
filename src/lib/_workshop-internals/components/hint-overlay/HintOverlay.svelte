<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import { say } from 'cowsay2';
	import { onMount } from 'svelte';
	import { hintStore } from '$lib/_workshop-internals/stores/hint-store';
	import type { Hints } from '$lib/_workshop-internals/types/hints';

	let hint: string;
	let hints: Hints;

	hintStore.subscribe((hintKey) => {
		if (hints?.[hintKey]) {
			hint = say(hints[hintKey], { nowrap: true });
		} else {
			hint = undefined;
		}
	});

	onMount(async () => {
		const hintsRaw = await fetch('/hints.js');
		const hintsText = await hintsRaw.text();
		hints = eval(hintsText.replace('export const ', ''));
	});

	const handleCloseHint = () => {
		hintStore.set(undefined);
	};
</script>

{#if hint}
	<div class="hint-container" on:click={handleCloseHint}>
		<div class="rpgui-container framed hint" on:click|stopPropagation>
			{hint}
			<button class="rpgui-button close-hint-button" on:click={handleCloseHint}>Close</button>
		</div>
	</div>
{/if}

<style>
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
		z-index: 10000;
	}

	.hint {
		position: relative;
		white-space: pre-wrap;
		font-family: monospace;
		font-size: 120%;
		line-height: 1.8em;
		color: white;
		user-select: text;
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
