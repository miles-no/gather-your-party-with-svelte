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
			<div>id: {JSON.stringify(character.id)}</div>
			<div>name: {JSON.stringify(character.name)}</div>
			<div>race: {JSON.stringify(character.race)}</div>
			<div>primaryClass: {JSON.stringify(character.primaryClass)}</div>
			<div>secondaryClass: {JSON.stringify(character.secondaryClass)}</div>
			<div>
				portrait: <img src={character.portrait} alt="Portrait" title={character.portrait} />
			</div>
			<div>
				attributes:
				<pre><code>{JSON.stringify(character.attributes, null, 2)}</code></pre>
			</div>
			<div>
				skills:
				<pre><code>{JSON.stringify(character.skills, null, 2)}</code></pre>
			</div>
		</div>
	{/if}

	<button
		data-quest-1="debug"
		class="rpgui-button rpgui-button--small"
		on:click={handleToggleShowDebug}>Character debug</button
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
		z-index: 10000;
	}

	.debug-character-data {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		background: white !important;
		font-size: 0.825em;
		line-height: 1.25;
	}

	.debug-character-data img {
		height: 64px;
	}
</style>
