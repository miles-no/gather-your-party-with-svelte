<script lang="ts">
	type ButtonVariant = 'golden';

	export let variant: ButtonVariant;
	export let small: boolean;
	export let disabled: boolean;
</script>

<button
	class="rpgui-button"
	class:golden={variant === 'golden'}
	class:rpgui-button--small={small}
	{disabled}
	on:click><slot /></button
>
