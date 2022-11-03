<script lang="ts">
	type ButtonVariant = 'golden';

	export let variant: ButtonVariant = undefined;
	export let small: boolean = undefined;
	export let disabled: boolean = undefined;
</script>

<button
	data-quest-2
	class="rpgui-button"
	class:golden={variant === 'golden'}
	class:rpgui-button--small={small}
	{disabled}
	on:click><slot /></button
>
