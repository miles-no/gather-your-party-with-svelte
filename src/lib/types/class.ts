import type { CLASSES } from '$lib/models/classes';

type Keys = keyof typeof CLASSES;
export type Class = (typeof CLASSES)[Keys];
