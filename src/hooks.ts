/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 */

import fs from 'fs';
import path from 'path';
import type { Quest } from '$lib/_workshop-internals/types/quest';
import type { Quests } from '$lib/_workshop-internals/types/quests';
import type { Session } from '$lib/_workshop-internals/types/session';

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

const parseQuests = (markdown: string): Quests => {
	const splitByTitanQuests = markdown.split('# Titan Quest ');
	const rawTitanQuests = splitByTitanQuests.slice(1);
	const rawOrdinaryQuests = splitByTitanQuests[0].split('# Quest ').slice(1);

	const ordinary = rawOrdinaryQuests.map((quest) => parseQuest(quest));
	const titans = rawTitanQuests.map((quest) => parseQuest(quest, true));

	return { ordinary, titans };
};

export const getSession = (): Session => {
	const readme = fs.readFileSync(path.resolve('README.md'), { encoding: 'utf8' });
	const rawQuests = fs.readFileSync(path.resolve('workshop-tasks.md'), { encoding: 'utf8' });

	const quests = parseQuests(rawQuests);

	return { readme, quests };
};
