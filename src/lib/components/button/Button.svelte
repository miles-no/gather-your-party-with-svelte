<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let disabled: boolean;

	const handleClick = () => {
		dispatch('click');
	};
</script>

<button class="interactive button" {disabled} on:click={handleClick}><slot /></button>

<style>
	.button:not(:disabled) {
		cursor: pointer;
	}
	.button:focus:not(:disabled),
	.button:hover:not(:disabled) {
		font-weight: bold;
	}
	.button:hover:not(:disabled) {
		box-shadow: 0 0 2px 1px gray;
	}
</style>
