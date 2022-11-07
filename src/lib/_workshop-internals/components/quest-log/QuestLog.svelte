<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Quest from '$lib/_workshop-internals/components/quest-log/Quest.svelte';
	import { questLog } from '$lib/_workshop-internals/stores/quest-log-store';
	import type { QuestLogProgress } from '$lib/_workshop-internals/types/quest-log-progress';
	import type { Quests } from '$lib/_workshop-internals/types/quests';

	export let quests: Quests;

	let showQuestLog = false;

	const toggleQuestLog = () => {
		showQuestLog = !showQuestLog;
	};

	const getQuestProgress = (questLog: QuestLogProgress, id: string): boolean => {
		return questLog[id];
	};

	const setQuestProgress = (id: string, completed: boolean) => {
		questLog.set({ ...$questLog, [id]: completed });
	};

	onMount(() => {
		if (!$questLog[2]) {
			console.log(
				"PS: Don't worry about warnings about unkwown props and unexpected slots in the <Button> component for now, that's expected until we complete the second quest!",
			);
		}
	});
</script>

<button class="rpgui-button rpgui-button--small toggle-btn" on:click={toggleQuestLog}>
	Quests
</button>

{#if showQuestLog}
	<div transition:fade={{ duration: 100 }} class="rpgui-container framed-golden quest-log">
		{#each quests.ordinary as quest (quest.id)}
			<Quest
				{quest}
				completed={getQuestProgress($questLog, quest.id)}
				on:toggleCompleted={({ detail: completed }) => setQuestProgress(quest.id, completed)}
			/>
		{/each}
		{#each quests.titans as quest (quest.id)}
			<Quest
				{quest}
				completed={getQuestProgress($questLog, quest.id)}
				on:toggleCompleted={({ detail: completed }) => setQuestProgress(quest.id, completed)}
			/>
		{/each}
	</div>
{/if}

<style>
	.toggle-btn {
		position: absolute;
		top: 0;
		right: 0;
		min-width: 110px;
		width: 110px;
		height: 40px;
		padding: 0;
		z-index: 9001;
	}

	.quest-log {
		position: absolute;
		top: 40px;
		right: 0;
		z-index: 9000;
		width: 600px;
		max-width: 100vw;
		height: 80vh;
		overflow-y: scroll;
	}
</style>
