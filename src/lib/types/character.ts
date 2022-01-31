import type { Class } from '$lib/types/class';
import type { Race } from '$lib/types/race';

export type Character = {
	id: string;
	name: string;
	race: Race;
	primaryClass: Class;
	secondaryClass?: Class;
	// TODO Add more fields
};
