<script lang="ts">
	import type { PageData } from './$types';
	import { slide } from 'svelte/transition';
	import Markdown from '$lib/_workshop-internals/components/markdown/Markdown.svelte';

	export let data: PageData;

	let isReadmeOpen = false;

	const toggleReadme = () => {
		isReadmeOpen = !isReadmeOpen;
	};
</script>

<svelte:head>
	<title>Gather your Party with Svelte!</title>
</svelte:head>

<section>
	<h1>Gather your Party with Svelte!</h1>

	<button class="toggle-markdown rpgui-button" on:click={toggleReadme}>
		{isReadmeOpen ? 'Hide' : 'Show'} Readme
	</button>
	{#if isReadmeOpen}
		<div class="markdown" transition:slide={{ duration: 300 }}>
			<Markdown source={data.readme} />
		</div>
	{/if}
</section>

<style lang="css">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.toggle-markdown {
		width: 200px;
	}

	.markdown {
		display: inline-block;
		max-height: 60vh;
		overflow-y: scroll;
		max-width: 100%;
		padding: 0.25em;
		width: 800px;
	}
</style>
