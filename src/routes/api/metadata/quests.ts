/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting the quests raw data.
 */

import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';

const QUESTS_PATH = 'workshop-tasks.md';

// GET /api/metadata/workshop-tasks
export const get: RequestHandler = async () => {
	const data = fs.readFileSync(QUESTS_PATH, 'utf8');

	return { body: data };
};
