<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import type { Character } from '$lib/types/character';

	export let display = false;
	export let character: Character = undefined;
</script>

{#if display}
	<div class="rpgui-container framed-grey debug-character-data">
		<p>DEBUG CHARACTER DATA</p>
		<pre><code>{JSON.stringify(character, undefined, 2)}</code></pre>
	</div>
{/if}

<style>
	.debug-character-data {
		background: white;
	}

	.debug-character-data p {
		color: black;
		font-weight: 300;
		text-shadow: none;
	}

	.debug-character-data pre {
		font-size: 0.825em;
		line-height: 1.25;
	}
</style>
