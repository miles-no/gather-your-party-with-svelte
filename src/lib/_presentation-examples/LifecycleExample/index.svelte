<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { apiFetch } from '$lib/utils/api-fetch';

	let portrait: string;

	let counter = 0;
	const interval = setInterval(() => {
		counter += 1;
	}, 1000);

	onMount(async () => {
		portrait = await apiFetch('/api/portraits/portrait_15.jpg');
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

{#if portrait}
	<img src={portrait} alt="Portrait" />
{/if}

<p>This component has been mounted for {counter} seconds.</p>
