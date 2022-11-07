/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * As the filename might hint at, this file contains the layout of the application.
 */

import type { LayoutLoad } from './$types';
import { parseQuests } from '$lib/_workshop-internals/utils/quests';

export const prerender = true;

export const load: LayoutLoad = async ({ fetch }) => {
	const questsResponse = await fetch('/api/metadata/quests');
	const questsRawText = await questsResponse.text();
	const quests = parseQuests(questsRawText);

	return { quests };
};
