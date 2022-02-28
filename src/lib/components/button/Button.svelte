<script lang="ts">
	/**
	 * Quest 2 - The Mighty Button
	 */
	type ButtonVariant = 'golden';

	let variant: ButtonVariant = undefined;
	let small: boolean = undefined;
	let disabled: boolean = undefined;
</script>

<button
	class="rpgui-button"
	class:golden={variant === 'golden'}
	class:rpgui-button--small={small}
	{disabled}
/>
