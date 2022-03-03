/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains logic for validating character payloads.
 */

import type { ApiError } from '$lib/types/api-error';

export const validateCharacter = (character: unknown): void | ApiError => {
	if (character === null || character === undefined) {
		return { status: 400, error: 'Missing request body' };
	}
	if (typeof character !== 'object' || Array.isArray(character)) {
		return { status: 400, error: 'Request body must be of type object' };
	}
};
