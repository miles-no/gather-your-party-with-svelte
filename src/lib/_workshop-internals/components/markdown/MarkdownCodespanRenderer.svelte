<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import { hintStore } from '$lib/_workshop-internals/stores/hint-store';

	export let raw = '';

	$: rawSanitized = raw.replace(/`/g, '');
	$: hintKey = rawSanitized.match(/^npm run hint (t?\d+\w)$/)?.[1];

	const handleShowHint = () => {
		hintStore.set(hintKey);
	};
</script>

{#if rawSanitized.startsWith('npm run hint')}
	<div class="container">
		<code>{rawSanitized}</code>
		<button class="rpgui-button rpgui-button--small show-hint-button" on:click={handleShowHint}
			>Show hint</button
		>
	</div>
{:else}
	<code>{rawSanitized}</code>
{/if}

<style>
	.container {
		display: inline-flex;
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
</style>
