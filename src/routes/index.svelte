<script context="module" lang="ts">
	import type { Session } from '$lib/types/session';
	import type { Load } from '@sveltejs/kit';
	import SvelteMarkdown from 'svelte-markdown';

	export const prerender = true;

	export const load: Load<{ session: Session }> = async ({ session }) => ({
		props: { readme: session.readme, quests: session.quests },
	});
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';

	export let readme: string;
	export let quests: string;

	let questsIsOpen = false;
	let readmeIsOpen = false;

	const toggleQuests = () => {
		questsIsOpen = !questsIsOpen;
		readmeIsOpen = false;
	};
	const toggleReadme = () => {
		readmeIsOpen = !readmeIsOpen;
		questsIsOpen = false;
	};
</script>

<svelte:head>
	<title>Gather your party with Svelte!</title>
</svelte:head>

<section>
	<h1>Gather your party with Svelte!</h1>

	<button class="toggle-markdown rpgui-button" on:click={toggleQuests}>
		{questsIsOpen ? 'Hide' : 'Show'} Quests
	</button>
	<button class="toggle-markdown rpgui-button" on:click={toggleReadme}>
		{readmeIsOpen ? 'Hide' : 'Show'} Readme
	</button>
	{#if questsIsOpen}
		<div class="markdown" transition:slide={{ duration: 300 }}>
			<SvelteMarkdown source={quests} />
		</div>
	{/if}
	{#if readmeIsOpen}
		<div class="markdown" transition:slide={{ duration: 300 }}>
			<SvelteMarkdown source={readme} />
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
