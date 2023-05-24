import type { ATTRIBUTES } from '$lib/models/attributes';

type Keys = keyof typeof ATTRIBUTES;
export type Attribute = (typeof ATTRIBUTES)[Keys];
