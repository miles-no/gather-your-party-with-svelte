/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting all characters and adding new characters.
 */

import type { RequestHandler } from './$types';
import { v4 as uuid } from '@lukeed/uuid';
import type { Character } from '$lib/types/character';
import type { UpsertCharacterRequest } from '$lib/types/upsert-character-request';
import {
	isApiError,
	getCharacters,
	saveCharacters,
} from '$lib/_workshop-internals/utils/api-utils';
import { validateCharacter } from '$lib/_workshop-internals/utils/character-validation';

// GET /api/characters
export const GET: RequestHandler = () => {
	const response = getCharacters();
	if (isApiError(response)) {
		return new Response(response.error, { status: response.status });
	}

	return new Response(JSON.stringify(response));
};

// POST /api/characters
export const POST: RequestHandler = async ({ request }) => {
	let data: unknown;
	try {
		data = await request.json();
	} catch (error) {
		return new Response('Request body must be a string containing valid JSON', { status: 400 });
	}

	const validation = validateCharacter(data);
	if (isApiError(validation)) {
		return new Response(validation.error, { status: validation.status });
	}

	const characterRequest: UpsertCharacterRequest = data as UpsertCharacterRequest;
	const characters = getCharacters();
	if (isApiError(characters)) {
		return new Response(characters.error, { status: characters.status });
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
		return new Response(response.error, { status: response.status });
	}

	return new Response(JSON.stringify(characterRequest), { status: 201 });
};
