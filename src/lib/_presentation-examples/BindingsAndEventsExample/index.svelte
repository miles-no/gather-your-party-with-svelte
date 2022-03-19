<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let name = 'world';

	const handleChange = () => {
		dispatch('change', { value: name });
	};
	const handleEnter = (event) => {
		if (event.key === 'Enter') {
			dispatch('you-shall-not-enter');
		}
	};
</script>

<input bind:value={name} on:input={handleChange} on:keyup={handleEnter} />

<p>Hello {name}!</p>
