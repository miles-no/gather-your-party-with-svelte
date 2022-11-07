<script lang="ts">
	import { SKILLS } from '$lib/models/skills';
	import type { Skill } from '$lib/types/skill';

	const MAX_SKILLS = 4;

	export let id: string;
	export let value: Skill[] = [];

	let availableSkillsCount = MAX_SKILLS;

	const formatSkill = (skill: Skill) =>
		Object.entries(SKILLS)
			.find(([, value]) => value === skill)[0]
			.replace(/([a-z])([A-Z])/g, '$1 $2');

	const handleAddSkill = (skill: Skill) => {
		if (availableSkillsCount === 0) {
			return;
		}

		value = [...value, skill].sort();
		availableSkillsCount--;
	};

	const handleRemoveSkill = (skill: Skill) => {
		value = value.filter((s) => s !== skill);
		availableSkillsCount++;
	};

	// Quest 4 - Skills to Desire: Enter TypeScript here START

	// Quest 4 - Skills to Desire: Enter TypeScript here END
</script>

<div {id} class="container">
	<div>
		<div class="label">Chosen skills ({MAX_SKILLS - availableSkillsCount}/{MAX_SKILLS})</div>

		<div class="list">
			<!-- Quest 4 - Skills to Desire: Enter HTML markup here START -->
			{#each value as skill (skill)}
				<button class="rpgui-button rpgui-button--small" on:click={() => handleRemoveSkill(skill)}
					>{formatSkill(skill)} &gt;</button
				>
			{/each}
			<!-- Quest 4 - Skills to Desire: Enter HTML markup here END -->
		</div>
	</div>

	<div>
		<div class="label">
			Available skills {#each Array(availableSkillsCount).fill(0) as _}*{/each}
		</div>

		<div class="list">
			<!-- Quest 4 - Skills to Desire: Enter HTML markup here START -->
			{#each Object.values(SKILLS).filter((skill) => !value.includes(skill)) as skill (skill)}
				<button
					class="rpgui-button rpgui-button--small"
					disabled={availableSkillsCount === 0}
					on:click={() => handleAddSkill(skill)}>&lt; {formatSkill(skill)}</button
				>
			{/each}
			<!-- Quest 4 - Skills to Desire: Enter HTML markup here END -->
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: auto;
	}

	.label {
		margin-bottom: 0.5rem;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		min-height: 240px;
		width: 280px;
	}
</style>
