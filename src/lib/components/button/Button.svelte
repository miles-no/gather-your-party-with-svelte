<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	type ButtonVariant = 'golden';

	const dispatch = createEventDispatcher();

	export let variant: ButtonVariant = undefined;
	export let small: boolean = undefined;
	export let disabled: boolean = undefined;

	const handleClick = () => {
		dispatch('click');
	};
</script>

<button
	class="rpgui-button"
	class:golden={variant === 'golden'}
	class:rpgui-button--small={small}
	{disabled}
	on:click={handleClick}><slot /></button
>
