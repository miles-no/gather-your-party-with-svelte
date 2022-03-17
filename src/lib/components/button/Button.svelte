<script lang="ts">
	/**
	 * Quest 2 - The Mighty Button
	 */
	type ButtonVariant = 'golden';

	let variant: ButtonVariant;
	let small: boolean;
	let disabled: boolean;
</script>

<button
	class="rpgui-button"
	class:golden={variant === 'golden'}
	class:rpgui-button--small={small}
	{disabled}
/>
