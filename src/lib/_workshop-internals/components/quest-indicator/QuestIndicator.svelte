<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import { onDestroy, onMount } from 'svelte';
	import { currentQuest } from '$lib/_workshop-internals/stores/quest-log-store';
	import type { Unsubscriber } from 'svelte/store';

	const currentQuestMarker = 'data-quest-current';
	const currentQuestClass = 'active-quest-indicator';

	let observer: MutationObserver;
	let currentQuestUnsubscriber: Unsubscriber;
	let questToDisplay: string;

	const renderQuestIndicators = () => {
		const activeIndicators = document.body.querySelectorAll(`[${currentQuestMarker}]`);
		activeIndicators?.forEach((node) => {
			node.removeAttribute(currentQuestMarker);
			node.classList.remove(currentQuestClass);
		});

		const questNodes = document.body.querySelectorAll(`[data-quest-${questToDisplay}]`);
		questNodes?.forEach((node) => {
			node.setAttribute(currentQuestMarker, '');
			node.classList.add(currentQuestClass);
		});
	};

	onMount(() => {
		observer = new MutationObserver(() => {
			renderQuestIndicators();
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});

		currentQuestUnsubscriber = currentQuest.subscribe((current) => {
			questToDisplay = current;
			renderQuestIndicators();
		});
	});

	onDestroy(() => {
		observer?.disconnect();
		currentQuestUnsubscriber?.();
	});
</script>
