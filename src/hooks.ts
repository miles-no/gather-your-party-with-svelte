/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 */

import type { Session } from '$lib/types/session';
import fs from 'fs';
import path from 'path';
import type { Quests } from '$lib/types/quests';
import type { Quest } from '$lib/types/quest';

const getPart = (key: string, text: string): string => {
	const parts = text.split(`#### ${key}`);
	return parts[1].split('####')[0];
};

const parseQuest = (rawQuest: string): Quest => {
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
		id,
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

	const ordinary = rawOrdinaryQuests.map(parseQuest);
	const titans = rawTitanQuests.map(parseQuest);

	return { ordinary, titans };
};

export const getSession = (): Session => {
	const readme = fs.readFileSync(path.resolve('README.md'), { encoding: 'utf8' });
	const rawQuests = fs.readFileSync(path.resolve('workshop-tasks.md'), { encoding: 'utf8' });
	const quests = parseQuests(rawQuests);
	return { readme, quests };
};
