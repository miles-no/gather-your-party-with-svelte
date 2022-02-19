<script lang="ts">
	import { apiFetch } from '$lib/utils/ApiService';
	import { sleep } from '$lib/utils/sleep';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	let getPortraitsPromise: Promise<string> = undefined;

	onMount(() => {
		getPortraitsPromise = apiFetch<string>('/api/portraits');
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

<!--
Quest 6 - Beauties and the Beasts
-->
<style>
</style>
