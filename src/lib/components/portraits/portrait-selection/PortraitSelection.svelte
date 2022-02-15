<script lang="ts">
	import Loader from '$lib/components/loader/Loader.svelte';
	import PortraitPreview from '$lib/components/portraits/portrait-preview/PortraitPreview.svelte';
	import { ApiService } from '$lib/utils/ApiService';
	import { sleep } from '$lib/utils/sleep';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	const portraitsApi = new ApiService<string>();

	let getPortraitsPromise: Promise<string> = undefined;

	onMount(() => {
		getPortraitsPromise = portraitsApi.fetch('/api/portraits');
	});

	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this function for the workshop.
	 *
	 * This function simulates a delay on getting the external URL, which would in reality resolve
	 * very fast. This is done to hightlight the different states of Svelte's #await block.
	 */
	const getPortrait = async (url: string): Promise<string> => {
		await sleep({ min: 0.5, max: 4 });

		return url;
	};

	const handleSelect = ({ detail: { portrait } }) => {
		dispatch('select', { portrait });
	};
</script>

{#await getPortraitsPromise}
	<Loader />
{:then portraits}
	<div class="portraits">
		{#each portraits ?? [] as portrait (portrait)}
			{#await getPortrait(portrait)}
				<PortraitPreview isLoading clickable on:click={handleSelect} />
			{:then payload}
				<PortraitPreview value={payload} clickable on:click={handleSelect} />
			{:catch error}
				<p>Could not fetch portrait</p>
			{/await}
		{/each}
	</div>
{:catch error}
	<p>Unable to fetch portraits.</p>
{/await}

<style>
	.portraits {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}
</style>
