/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 */

import { writable } from 'svelte/store';

export const hintStore = writable<string>(undefined);
