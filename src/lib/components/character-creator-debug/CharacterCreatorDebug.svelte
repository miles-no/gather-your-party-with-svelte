<script lang="ts">
	export let display = false;
	export let character = {};
</script>

{#if display}
	<div class="rpgui-container framed-grey debug-character-data">
		<p>DEBUG CHARACTER DATA</p>
		<pre><code>{JSON.stringify(character, undefined, 2)}</code></pre>
	</div>
{/if}

<style>
	.debug-character-data {
		background: #fff;
	}

	.debug-character-data p {
		color: #000;
		font-weight: 300;
		text-shadow: none;
	}

	.debug-character-data pre {
		font-size: 0.825em;
		line-height: 1.25;
	}
</style>
