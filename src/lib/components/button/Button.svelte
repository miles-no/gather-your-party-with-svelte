<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let disabled: boolean = undefined;

	const handleClick = () => {
		dispatch('click');
	};
</script>

<button class="rpgui-button golden" {disabled} on:click={handleClick}><slot /></button>
