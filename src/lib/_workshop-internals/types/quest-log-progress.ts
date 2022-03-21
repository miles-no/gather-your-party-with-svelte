/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 */

/**
 * Ordinary quests are not prefixed, and Titan quests are prefixed with 'Titan '
 */
export interface QuestLogProgress {
	[key: string]: boolean;
}
