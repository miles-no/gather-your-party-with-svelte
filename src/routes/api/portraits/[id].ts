/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting a specific portrait.
 */

import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';

// GET /api/portraits/[id]
export const GET: RequestHandler = async ({ params }) => {
	const lookupId = params.id;
	const path = `src/lib/_workshop-internals/assets/portraits/${lookupId}`;
	const data = fs.readFileSync(path, 'base64');

	return { body: `"data:image/jpeg;base64,${data}"` };
};
