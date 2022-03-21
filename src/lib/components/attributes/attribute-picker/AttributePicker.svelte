<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Attribute } from '$lib/types/attribute';

	const dispatch = createEventDispatcher();

	export let name: Attribute;
	export let value: number;
	export let disableMin: boolean;
	export let disableMax: boolean;

	const add = () => {
		dispatch('add');
	};

	const subtract = () => {
		dispatch('subtract');
	};
</script>

<div class="attribute">
	<span class="name">{name}</span>
	<button class="rpgui-button rpgui-button--small-squared" on:click={subtract} disabled={disableMin}
		>-</button
	>
	<span class="value">{value}</span>
	<button class="rpgui-button rpgui-button--small-squared" on:click={add} disabled={disableMax}
		>+</button
	>
</div>

<style>
	.attribute {
		display: flex;
		align-items: center;
	}

	.name {
		width: 175px;
		text-transform: capitalize;
	}

	.value {
		width: 40px;
		text-align: center;
	}
</style>
