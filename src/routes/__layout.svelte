<script context="module" lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 *
	 * As the filename might hint at, this file contains the layout of the application.
	 *
	 */

	import type { Session } from '$lib/types/session';
	import type { Load } from '@sveltejs/kit';

	export const prerender = true;

	export const load: Load<{ session: Session }> = async ({ session }) => {
		return {
			props: { quests: session.quests },
		};
	};
</script>

<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import QuestLog from '$lib/components/quest-log/QuestLog.svelte';
	import type { Quests } from '$lib/types/quests';
	import '../app.css';

	export let quests: Quests;
</script>

<Header />
<QuestLog {quests} />

<main>
	<slot />
</main>

<Footer />

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
