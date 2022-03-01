import type { Quests } from '$lib/_workshop-internals/types/quests';

export type Session = {
	readme: string;
	quests: Quests;
};
