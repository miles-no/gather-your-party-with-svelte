<script lang="ts">
	import { apiFetch } from '$lib/utils/api-fetch';

	export let id: string = undefined;
	export let tags: string[] = [];
</script>

<div class="container">
	{#if id}
		{#await apiFetch(`/api/portraits/${id}`)}
			Loading...
		{:then portrait}
			<img src={portrait} alt="Portrait" />
		{:catch error}
			Could not fetch portrait image.
		{/await}
	{:else}
		No portrait ID.
	{/if}
</div>

{#each tags as tag (tag)}
	<span>({tag}) </span>
{/each}

<style>
	.container {
		height: 128px;
		margin-bottom: 0.5rem;
	}

	img {
		height: 100%;
	}
</style>
