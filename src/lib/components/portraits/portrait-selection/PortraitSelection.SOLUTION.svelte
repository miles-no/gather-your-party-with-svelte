<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import Loader from '$lib/components/loader/Loader.svelte';
	import PortraitPreview from '$lib/components/portraits/portrait-preview/PortraitPreview.svelte';
	import { apiFetch } from '$lib/utils/api-fetch';

	const dispatch = createEventDispatcher();

	let getPortraitsPromise: Promise<string[]> = Promise.resolve([]);

	onMount(() => {
		getPortraitsPromise = apiFetch<string[]>('/api/portraits');
	});

	const fetchPortrait = async (portrait: string) => apiFetch(`/api/portraits/${portrait}`);

	const handleSelect = ({ detail: { portrait } }) => {
		dispatch('select', { portrait });
	};
</script>

{#await getPortraitsPromise}
	<Loader />
{:then portraits}
	<div class="portraits">
		{#each portraits as portrait (portrait)}
			{#await fetchPortrait(portrait)}
				<PortraitPreview isLoading />
			{:then payload}
				<PortraitPreview value={payload} clickable on:click={handleSelect} />
			{:catch _}
				<p>Unable to fetch portrait {portrait}.</p>
			{/await}
		{/each}
	</div>
{:catch _}
	<p>Unable to fetch list of portraits.</p>
{/await}

<style>
	.portraits {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}
</style>
