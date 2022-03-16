<script lang="ts">
	let count = 0;

	const increment = () => {
		count += 1;
	};

	$: sum = count * 2;
</script>

<button on:click={increment}>Click me to add 2</button>

<div>Clicked {count} {count === 1 ? 'time' : 'times'}</div>

<div>Sum: {sum}</div>

<style>
	* {
		margin-bottom: 1rem;
	}
</style>
