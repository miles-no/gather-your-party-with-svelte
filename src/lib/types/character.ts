import type { Class } from '$lib/types/class';
import type { Race } from '$lib/types/race';

export type Character = {
	id: string;
	name: string;
	race: Race;
	class: Class;
	// TODO Add more fields
};
