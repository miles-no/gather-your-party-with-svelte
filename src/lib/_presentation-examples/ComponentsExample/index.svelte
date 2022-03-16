<script lang="ts">
	import ClickIcon from './ClickIcon.svelte';

	export let hint = '';
	export let small: boolean = undefined;
	export let disabled: boolean = undefined;
</script>

<button class="my-button" class:small {disabled} on:click>
	<slot />
	<ClickIcon />
</button>
<span>{hint}</span>

<style>
	.my-button {
		border-radius: 4px;
		padding: 1rem 2rem;
	}
	.small {
		padding: 0.25rem;
	}
</style>
