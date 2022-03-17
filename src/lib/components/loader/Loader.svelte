<script lang="ts">
	let ms = 300;
	let counter = 0;

	const incr = () => {
		if (counter === 2) {
			counter = 0;

			return;
		}
		counter++;
	};

	let clear: NodeJS.Timer;
	$: {
		clearInterval(clear);
		clear = setInterval(incr, ms);
	}
</script>

{#if counter === 0}
	<div class="rpgui-icon potion-red loader" />
{:else if counter === 1}
	<div class="rpgui-icon potion-green loader" />
{:else if counter === 2}
	<div class="rpgui-icon potion-blue loader" />
{/if}

<style>
	.loader {
		margin: auto;
	}
</style>
