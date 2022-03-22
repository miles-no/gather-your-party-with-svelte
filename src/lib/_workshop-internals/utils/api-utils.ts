/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains logic for interacting with the API; reading from and writing to file.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import type { ApiError } from '$lib/types/api-error';
import type { Character } from '$lib/types/character';

const FOLDER_PATH = '.data';
const FILE_PATH = `${FOLDER_PATH}/characters.json`;
const ENCODING = 'utf8';

const createFileIfNotExist = () => {
	if (existsSync(FILE_PATH)) {
		return;
	}
	if (!existsSync(FOLDER_PATH)) {
		mkdirSync(FOLDER_PATH, { recursive: true });
	}
	writeFileSync(FILE_PATH, '[]', ENCODING);
};

const notNil = (obj: unknown): boolean => obj !== null && obj !== undefined;

export const getCharacters = (): Character[] | ApiError => {
	createFileIfNotExist();
	try {
		const rawData = readFileSync(FILE_PATH, ENCODING);
		const characters = JSON.parse(rawData);
		if (!Array.isArray(characters)) {
			return { status: 500, error: 'Corrupt characters file' };
		}
		return characters;
	} catch (error) {
		console.error('Failed to load characters file.\n', error);
		return [];
	}
};

export const saveCharacters = (characters: Character[]): void | ApiError => {
	const jsonString = JSON.stringify(characters);
	try {
		writeFileSync(FILE_PATH, jsonString, ENCODING);
	} catch (error) {
		console.error('Failed to write to file.\n', error);
		return { status: 500, error: 'Failed to write to file.' };
	}
};

export const isApiError = (obj: unknown): obj is ApiError => {
	const error = obj as ApiError;
	return notNil(error) && notNil(error.status) && notNil(error.error);
};
