/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting a specific portrait.
 */

import type { RequestHandler } from '@sveltejs/kit';

// GET /api/portraits/[id]
export const get: RequestHandler = async ({ params }) => {
	const lookupId = params.id;
	const path = `/portraits/${lookupId}`;

	return { body: { portrait: path } };
};
