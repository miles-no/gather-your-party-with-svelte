<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import { createEventDispatcher } from 'svelte';
	import QuestAccordion from '$lib/_workshop-internals/components/quest-log/QuestAccordion.svelte';
	import type { Quest } from '$lib/_workshop-internals/types/quest';
	import Markdown from '../markdown/Markdown.svelte';

	const dispatch = createEventDispatcher();

	export let quest: Quest;
	export let completed = false;

	const toggleCompleted = ({ detail: completed }) => {
		dispatch('toggleCompleted', completed);
	};

	/**
	 * For lists we can assume that if there are multiple '- `' we should display an s
	 */
	const showPlural = (str: string): string => (str?.split('- `').length > 2 ? 's' : '');
</script>

<div class="quest">
	<QuestAccordion
		id={quest.id}
		title={quest.title}
		{completed}
		on:toggleCompleted={toggleCompleted}
	>
		<span class="lore"><Markdown source={quest.lore} /></span>
		<span class="intro"><Markdown source={quest.intro} /></span>

		<h2>File{showPlural(quest.files)}</h2>
		<span class="files"><Markdown source={quest.files} /></span>

		<h2>Goal{showPlural(quest.goal)}</h2>
		<span class="goal"><Markdown source={quest.goal} /></span>

		<h2>Useful Links</h2>
		<span class="links"><Markdown source={quest.links} /></span>

		<h2>Hint{showPlural(quest.hints)}</h2>
		<span class="hints"><Markdown source={quest.hints} /></span>
	</QuestAccordion>
</div>

<style>
	.quest {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.quest:not(:first-child) {
		margin-top: 10px;
	}

	span.lore {
		display: block;
		font-size: 0.75rem;
		margin-left: 1rem;
		text-align: center;
	}

	span.intro {
		display: block;
		font-size: 0.825rem;
		margin-left: 1rem;
		margin-top: 1.5rem;
	}

	.quest h2 {
		text-align: left;
	}

	span.files,
	span.goal,
	span.links,
	span.hints {
		display: block;
		font-size: 0.825rem;
		margin-left: -2rem;
	}
</style>
