<script lang="ts">
	import Loader from '$lib/components/loader/Loader.svelte';
	import { createEventDispatcher } from 'svelte';
	import noPerson from './no-person.png';

	const dispatch = createEventDispatcher();

	export let big = false;
	export let clickable = false;
	export let isLoading = false;
	export let value: string;

	const handleClick = () => {
		dispatch('click', { portrait: value });
	};
</script>

<div
	class="rpgui-container framed container"
	class:big
	class:clickable={clickable && !isLoading}
	class:rpgui-cursor-point={clickable && !isLoading}
	on:click={handleClick}
>
	{#if isLoading}
		<div class="portrait"><Loader /></div>
	{:else}
		<img class="portrait active" src={value || noPerson} alt="Portrait" />
	{/if}
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		height: 240px;
		width: 153px;
		padding: 0;
		overflow: hidden;
	}
	.container.big {
		height: 320px;
		width: 204px;
	}
	.container.clickable:hover {
		filter: drop-shadow(0 0 8px white) brightness(120%);
	}

	.portrait {
		display: flex;
		height: 100%;
		min-width: 100%;
	}
  .portrait.active {
    background: black;
    object-fit: cover;
    image-rendering: initial;
  }
</style>
