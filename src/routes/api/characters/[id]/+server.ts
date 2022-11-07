/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting a specific character.
 */

import type { RequestHandler } from '@sveltejs/kit';
import { isApiError, getCharacters } from '$lib/_workshop-internals/utils/api-utils';

// GET /api/characters/[id]
export const GET: RequestHandler = async ({ params }) => {
	const lookupId = params.id;
	const characters = getCharacters();
	if (isApiError(characters)) {
		return { status: characters.status, body: characters.error };
	}
	const character = characters.find((char) => lookupId === char.id);
	if (!character) {
		console.warn(`Could not find character with id '${lookupId}'`);
		return { status: 404, body: `Could not find character with id '${lookupId}'` };
	}
	return { body: character };
};
