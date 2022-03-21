<script context="module" lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 *
	 * As the filename might hint at, this file contains the layout of the application.
	 *
	 */

	import type { Load } from '@sveltejs/kit';
	import { parseQuests } from '$lib/_workshop-internals/utils/quests';

	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const questsResponse = await fetch('/api/metadata/quests');
		const questsRawText = await questsResponse.text();
		const quests = parseQuests(questsRawText);
		return { props: { quests } };
	};
</script>

<script lang="ts">
	import HintOverlay from '$lib/_workshop-internals/components/hint-overlay/HintOverlay.svelte';
	import QuestLog from '$lib/_workshop-internals/components/quest-log/QuestLog.svelte';
	import type { Quests } from '$lib/_workshop-internals/types/quests';
	import Footer from '$lib/components/page-layout/footer/Footer.svelte';
	import Header from '$lib/components/page-layout/header/Header.svelte';
	import QuestIndicator from '$lib/_workshop-internals/components/quest-indicator/QuestIndicator.svelte';
	import '../app.css';

	export let quests: Quests;
</script>

<QuestIndicator />
<Header />

<QuestLog {quests} />

<main>
	<slot />
</main>

<Footer />

<HintOverlay />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
