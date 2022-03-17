<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import type { UpsertCharacterRequest } from '$lib/types/upsert-character-request';

	export let character: UpsertCharacterRequest;

	let display = false;

	const handleToggleShowDebug = () => {
		display = !display;
	};
</script>

<div class="container">
	{#if display}
		<div class="rpgui-container framed-grey debug-character-data">
			<pre><code>{JSON.stringify(character, undefined, 2)}</code></pre>
		</div>
	{/if}

	<button class="rpgui-button rpgui-button--small" on:click={handleToggleShowDebug}
		>Character debug</button
	>
</div>

<style>
	.container {
		position: fixed;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.debug-character-data {
		background: white;
	}

	.debug-character-data pre {
		font-size: 0.825em;
		line-height: 1.25;
	}
</style>
