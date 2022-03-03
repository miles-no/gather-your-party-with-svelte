<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 *
	 * This file contains logic for creating a modal overlaying the screen with an optional
	 * title and some content.
	 */

	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/button/Button.svelte';

	const MODAL_ID = 'modal-overlay';

	const dispatch = createEventDispatcher();

	export let label: string = undefined;

	export let show = false;

	const handleCloseByKey = (event: KeyboardEvent) => {
		if (event.code === 'Escape') {
			close();
		}
	};

	const handleOpen = () => {
		show = true;

		dispatch('open');

		window.addEventListener('keyup', handleCloseByKey);
	};

	const close = () => {
		show = false;

		dispatch('close');

		window.removeEventListener('keyup', handleCloseByKey);
	};

	const handleCloseByClick = (event: MouseEvent) => {
		if (event.target.id !== MODAL_ID) {
			return;
		}

		close();
	};
</script>

<Button small on:click={handleOpen}>{label}</Button>

{#if show}
	<div id={MODAL_ID} class="overlay" on:click={handleCloseByClick} on:keyup={handleCloseByKey}>
		<div class="rpgui-container framed container">
			{#if label}<h1 class="heading">{label}</h1>{/if}

			<slot />
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.3);
		transition: all 200ms ease-in-out;
		z-index: 1000;
	}

	.container {
		--modal-height: 70vh;
		--modal-width: 80vw;
		display: flex;
		flex-direction: column;
		height: var(--modal-height);
		width: var(--modal-width);
		overflow: auto;
	}

	.heading {
		margin-bottom: 1rem;
	}
</style>
