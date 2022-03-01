/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting all characters and adding new characters.
 */

import type { RequestHandler } from '@sveltejs/kit';
import type { Character } from '$lib/types/character';
import type { UpsertCharacterRequest } from '$lib/types/upsert-character-request';
import { isApiError, getCharacters, saveCharacters } from '$lib/utils/api-utils';
import { v4 as uuid } from '@lukeed/uuid';
import { validateCharacter } from '$lib/validation/character-validation';

// GET /api/characters
export const get: RequestHandler<void, Character[] | string> = () => {
	const response = getCharacters();
	if (isApiError(response)) {
		return { status: response.status, body: response.error };
	}
	return { body: response };
};

// POST /api/characters
export const post: RequestHandler = async ({ request }) => {
	let data;
	try {
		data = await request.json();
	} catch (error) {
		return { status: 400, body: 'Request body must be a string containing valid JSON' };
	}

	const validation = validateCharacter(data);
	if (isApiError(validation)) {
		return { status: validation.status, body: validation.error };
	}
	const characterRequest: UpsertCharacterRequest = data as UpsertCharacterRequest;
	const characters = getCharacters();
	if (isApiError(characters)) {
		return { status: characters.status, body: characters.error };
	}
	if (!characterRequest.id) {
		characterRequest.id = uuid();
	}
	const newCharacter: Character = characterRequest as Character;
	const existingIndex = characters.findIndex((char) => newCharacter.id === char.id);
	let updatedList: Character[];
	if (existingIndex === -1) {
		updatedList = [...characters, newCharacter];
	} else {
		const tmp = characters.slice();
		tmp[existingIndex] = newCharacter;
		updatedList = tmp;
	}
	const response = saveCharacters(updatedList);
	if (isApiError(response)) {
		return { status: response.status, body: response.error };
	}

	return { status: 201, body: characterRequest };
};
