<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let id = '';
	export let title = '';
	export let completed = false;

	let isOpen = false;

	const toggle = (): void => {
		isOpen = !isOpen;
	};

	const toggleCompleted = (completed: boolean): void => {
		dispatch('toggleCompleted', completed);
	};
</script>

<h1 class="accordion">
	<input
		id="quest-{id}"
		class="rpgui-checkbox golden toggle-completed"
		type="checkbox"
		bind:checked={completed}
		on:change={(event) => toggleCompleted(event.target.checked)}
	/><label class="toggle-completed-label" for="quest-{id}" />
	<button class="rpgui-cursor-point toggle-btn" on:click={toggle} aria-expanded={isOpen}>
		<svg
			width="20"
			height="20"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path d="M9 5l7 7-7 7" />
		</svg>
		<span class="title">{id} - {title}</span>
	</button>
</h1>
{#if isOpen}
	<div transition:slide={{ duration: 300 }}>
		<slot />
	</div>
{/if}

<style>
	.accordion {
		display: flex;
		align-items: center;
		padding: 0;
		margin: 0;
	}

	input[type='checkbox'].rpgui-checkbox.toggle-completed + label {
		margin: 0;
		padding-left: 1.5em;
	}

	.toggle-btn {
		border: none;
		background: none;
		display: flex;
		color: inherit;
		cursor: pointer;
		margin: 0;
	}

	svg {
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}

	.title {
		margin-left: 0.25em;
		font-size: 1em;
	}
</style>
