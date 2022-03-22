/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 */

import type { Quest } from '$lib/_workshop-internals/types/quest';
import type { Quests } from '$lib/_workshop-internals/types/quests';

const getPart = (key: string, text: string): string => {
	const parts = text.split(`#### ${key}`);
	return parts[1].split('####')[0];
};

const parseQuest = (rawQuest: string, titan = false): Quest => {
	const firstLine = rawQuest.split('\n')[0];
	const id = firstLine.split(' - ')[0];
	const title = firstLine.split(' - ')[1];
	const lore = getPart('Lore', rawQuest);
	const intro = getPart('Intro', rawQuest);
	const files = getPart('Files', rawQuest);
	const goal = getPart('Goal', rawQuest);
	const links = getPart('Links', rawQuest);
	const hints = getPart('Hints', rawQuest);

	return {
		id: titan ? 'Titan ' + id : id,
		title,
		lore,
		intro,
		files,
		goal,
		links,
		hints,
	};
};

export const parseQuests = (markdown: string): Quests => {
	const splitByTitanQuests = markdown.split('# Titan Quest ');
	const rawTitanQuests = splitByTitanQuests.slice(1);
	const rawOrdinaryQuests = splitByTitanQuests[0].split('# Quest ').slice(1);

	const ordinary = rawOrdinaryQuests.map((quest) => parseQuest(quest));
	const titans = rawTitanQuests.map((quest) => parseQuest(quest, true));

	return { ordinary, titans };
};
