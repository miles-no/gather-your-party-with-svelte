<script lang="ts">
	let ms = 300;
	let counter = 0;

	const increment = () => {
		if (counter === 2) {
			counter = 0;

			return;
		}

		counter++;
	};

	let clear: number;

	$: {
		clearInterval(clear);
		clear = setInterval(increment, ms);
	}
</script>

<div
	class="rpgui-icon loader"
	class:potion-red={counter === 0}
	class:potion-green={counter === 1}
	class:potion-blue={counter === 2}
/>

<style>
	.loader {
		margin: auto;
	}
</style>
