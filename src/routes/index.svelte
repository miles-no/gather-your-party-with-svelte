<script context="module" lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 *
	 * The frontpage/homepage of our application.
	 */

	import type { Load } from '@sveltejs/kit';

	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const readmeResponse = await fetch('/api/metadata/readme');
		const readme = await readmeResponse.text();

		return { props: { readme } };
	};
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	import Markdown from '$lib/_workshop-internals/components/markdown/Markdown.svelte';

	export let readme: string;

	let isReadmeOpen = false;

	const toggleReadme = () => {
		isReadmeOpen = !isReadmeOpen;
	};
</script>

<svelte:head>
	<title>Gather your party with Svelte!</title>
</svelte:head>

<section>
	<h1>Gather your party with Svelte!</h1>

	<button class="toggle-markdown rpgui-button" on:click={toggleReadme}>
		{isReadmeOpen ? 'Hide' : 'Show'} Readme
	</button>
	{#if isReadmeOpen}
		<div class="markdown" transition:slide={{ duration: 300 }}>
			<Markdown source={readme} />
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
