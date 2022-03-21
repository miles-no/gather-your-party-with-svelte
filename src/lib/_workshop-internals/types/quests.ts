/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 */

import type { Quest } from '$lib/_workshop-internals/types/quest';

export interface Quests {
	ordinary: Quest[];
	titans: Quest[];
}
