<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let small: boolean = undefined;
	export let disabled: boolean = undefined;

	const handleClick = () => {
		dispatch('click');
	};
</script>

<button
	class="interactive clickable"
	class:interactive--small={small}
	{disabled}
	on:click={handleClick}><slot /></button
>
