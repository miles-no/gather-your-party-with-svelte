<script lang="ts">
	import Loader from '$lib/components/loader/Loader.svelte';
	import PortraitPreview from '$lib/components/portraits/portrait-preview/PortraitPreview.svelte';
	import { apiFetch } from '$lib/utils/api-fetch';
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

<!-- Quest 6 - Beauties and the Beasts: Enter HTML markup here START -->

<!-- Quest 6 - Beauties and the Beasts: Enter HTML markup here END -->
<style>
	/* Quest 6 - Beauties and the Beasts: Enter CSS styles here START */

	/* Quest 6 - Beauties and the Beasts: Enter CSS styles here END */
</style>
