import type { Attribute } from '$lib/types/attribute';

export type AttributeAllocation = {
	[key in Attribute]: number;
};
