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
	class={`interactive ${small ? 'interactive--small' : ''} clickable`}
	{disabled}
	on:click={handleClick}><slot /></button
>
