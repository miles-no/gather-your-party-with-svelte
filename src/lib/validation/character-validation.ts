import type { ApiError } from '$lib/types/api-error';

export const validateCharacter = (character: unknown): void | ApiError => {
	if (character === null || character === undefined) {
		return { status: 400, error: 'Missing request body' };
	}
	if (typeof character !== 'object' || Array.isArray(character)) {
		return { status: 400, error: 'Request body must be of type object' };
	}
	// TODO add more validation as we add more fields
};
