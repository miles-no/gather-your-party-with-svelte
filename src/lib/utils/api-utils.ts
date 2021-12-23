import type { ApiError } from '$lib/types/api-error';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import type { Character } from '$lib/types/character';

const folderPath = '.data';
const filePath = folderPath + '/characters.json';
const encoding = 'utf8';

const createFileIfNotExist = (): void => {
	if (existsSync(filePath)) {
		return;
	}
	if (!existsSync(folderPath)) {
		mkdirSync(folderPath, { recursive: true });
	}
	writeFileSync(filePath, '[]', encoding);
};

const notNil = (obj: unknown): boolean => {
	return obj !== null && obj !== undefined;
};

export const getCharacters = (): Character[] | ApiError => {
	createFileIfNotExist();
	try {
		const rawData = readFileSync(filePath, encoding);
		const characters = JSON.parse(rawData);
		if (!Array.isArray(characters)) {
			return { status: 500, error: 'Corrupt characters file' };
		}
		return characters;
	} catch (e) {
		console.error('Failed to load characters file.\n', e);
		return [];
	}
};

export const saveCharacters = (characters: Character[]): void | ApiError => {
	const jsonString = JSON.stringify(characters);
	try {
		writeFileSync(filePath, jsonString, encoding);
	} catch (e) {
		console.error('Failed to write to file.\n', e);
		return { status: 500, error: 'Failed to write to file.' };
	}
};

export const isApiError = (obj: unknown): obj is ApiError => {
	const error = obj as ApiError;
	return notNil(error) && notNil(error.status) && notNil(error.error);
};
