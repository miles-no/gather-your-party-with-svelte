import type { Class } from '$lib/types/class';
import type { Race } from '$lib/types/race';
import type { Skill } from '$lib/types/skill';
import type { AttributeAllocation } from '$lib/types/attribute-allocation';

export type Character = {
	id: string;
	name: string;
	race: Race;
	primaryClass: Class;
	secondaryClass?: Class;
	portrait: string;
	attributes: AttributeAllocation;
	skills: Skill[];
};
