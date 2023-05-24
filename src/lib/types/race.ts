import type { RACES } from '$lib/models/races';

type Keys = keyof typeof RACES;
export type Race = (typeof RACES)[Keys];
