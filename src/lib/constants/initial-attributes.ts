import { ATTRIBUTES } from '$lib/models/attributes';
import type { AttributeAllocation } from '$lib/types/attribute-allocation';

const STARTING_VALUE = 8;

export const INITIAL_ATTRIBUTES: AttributeAllocation = {
	[ATTRIBUTES.Strength]: STARTING_VALUE,
	[ATTRIBUTES.Dexterity]: STARTING_VALUE,
	[ATTRIBUTES.Constitution]: STARTING_VALUE,
	[ATTRIBUTES.Wisdom]: STARTING_VALUE,
	[ATTRIBUTES.Intelligence]: STARTING_VALUE,
	[ATTRIBUTES.Charisma]: STARTING_VALUE,
};
