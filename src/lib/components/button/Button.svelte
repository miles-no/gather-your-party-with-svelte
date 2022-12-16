<script lang="ts">
	/**
	 * Quest 2 - The Mighty Button
	 */

	type ButtonVariant = 'golden';

	export let variant: ButtonVariant;
	export let small: boolean;
	export let disabled: boolean;
</script>

<button
	data-quest-2
	class="rpgui-button"
	class:golden={variant === 'golden'}
	class:rpgui-button--small={small}
	{disabled}
/>
