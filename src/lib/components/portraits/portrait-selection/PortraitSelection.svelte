<script lang="ts">
	import Loader from '$lib/components/loader/Loader.svelte';
	import PortraitPreview from '$lib/components/portraits/portrait-preview/PortraitPreview.svelte';
	import { apiFetch } from '$lib/utils/ApiService';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	let getPortraitsPromise: Promise<string[]> = Promise.resolve([]);

	onMount(() => {
		getPortraitsPromise = apiFetch<string[]>('/api/portraits');
	});

	const handleSelect = ({ detail: { portrait } }) => {
		dispatch('select', { portrait });
	};
</script>

{#await getPortraitsPromise}
	<Loader />
{:then portraits}
	<div class="portraits">
		{#each portraits as portrait (portrait)}
			{#await apiFetch(`api/portraits/${portrait}`)}
				<PortraitPreview isLoading />
			{:then payload}
				<PortraitPreview value={payload.portrait} clickable on:click={handleSelect} />
			{:catch error}
				<p>Unable to fetch portrait {portrait}.</p>
			{/await}
		{/each}
	</div>
{:catch error}
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
