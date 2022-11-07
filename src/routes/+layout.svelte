<script lang="ts">
	import type { PageData } from './$types';
	import HintOverlay from '$lib/_workshop-internals/components/hint-overlay/HintOverlay.svelte';
	import Footer from '$lib/components/page-layout/footer/Footer.svelte';
	import Header from '$lib/components/page-layout/header/Header.svelte';
	import QuestIndicator from '$lib/_workshop-internals/components/quest-indicator/QuestIndicator.svelte';
	import QuestLog from '$lib/_workshop-internals/components/quest-log/QuestLog.svelte';
	import '../app.css';

	export let data: PageData;
</script>

<QuestIndicator />

<Header />

<QuestLog quests={data.quests} />

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
