/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 */

import type { Writable } from 'svelte/store';
import { writable, get } from 'svelte/store';
import { browser } from '$app/env';
import type { QuestLogProgress } from '$lib/_workshop-internals/types/quest-log-progress';

const storage = <T>(key: string, initValue: T): Writable<T> => {
	const store = writable(initValue);
	if (!browser) return store;

	const storedValueStr = localStorage.getItem(key);
	if (storedValueStr != null) store.set(JSON.parse(storedValueStr));

	store.subscribe((val) => {
		if ([null, undefined].includes(val)) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, JSON.stringify(val));
		}
	});

	window.addEventListener('storage', () => {
		const storedValueStr = localStorage.getItem(key);
		if (storedValueStr == null) return;

		const localValue: T = JSON.parse(storedValueStr);
		if (localValue !== get(store)) store.set(localValue);
	});

	return store;
};

export const questLog = storage<QuestLogProgress>('quest-log', {});
