<script lang="ts">
	import Modal from '$lib/components/modal/Modal.svelte';
	import PortraitPreview from '$lib/components/portraits/portrait-preview/PortraitPreview.svelte';
	import PortraitSelection from '$lib/components/portraits/portrait-selection/PortraitSelection.svelte';

	export let id: string;
	export let value: string = undefined;

	let showPortraitSelection = false;

	const handleSelectPortrait = ({ detail: { portrait } }) => {
		value = portrait;

		showPortraitSelection = false;
	};
</script>

<div {id} class="container">
	<div data-quest-6="img" class="preview-container">
		<PortraitPreview {value} />
	</div>

	<Modal label="Change portrait" bind:show={showPortraitSelection}
		><PortraitSelection on:select={handleSelectPortrait} /></Modal
	>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}

	.preview-container {
		margin-bottom: 0.5rem;
	}
</style>
