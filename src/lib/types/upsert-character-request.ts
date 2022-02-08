import type { Character } from '$lib/types/character';

export type UpsertCharacterRequest = Omit<Character, 'id'> & {
	id?: string;
};
