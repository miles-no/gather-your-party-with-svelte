import type {RequestHandler} from '@sveltejs/kit';
import type {Locals} from '$lib/types';
import type {Character} from "$lib/types/character";
import {isApiError, getCharacters, saveCharacters} from "$lib/utils/api-utils";
import {v4 as uuid} from '@lukeed/uuid';

// GET /api/characters
export const get: RequestHandler<Locals> = async () => {
    const response = getCharacters();
    if (isApiError(response)) {
        return {status: response.status, body: response.error};
    }
    return {body: response};
};

// POST /api/characters
export const post: RequestHandler<Locals> = async (request) => {
    const characters = getCharacters();
    if (isApiError(characters)) {
        return {status: characters.status, body: characters.error};
    }
    // TODO Validate input data?
    const character: Character = request.body as unknown as Character;
    if (!character.id) {
        character.id = uuid();
    }
    const existingIndex = characters.findIndex(char => character.id === char.id);
    let updatedList: Character[];
    if (existingIndex === -1) {
        updatedList = [...characters, character];
    } else {
        const tmp = characters.slice();
        tmp[existingIndex] = character;
        updatedList = tmp;
    }
    const response = saveCharacters(updatedList);
    if (isApiError(response)) {
        return {status: response.status, body: response.error};
    }
    return {status: 204};
};