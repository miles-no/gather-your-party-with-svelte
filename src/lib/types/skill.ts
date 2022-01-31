import type { SKILLS } from '$lib/models/skills';

type Keys = keyof typeof SKILLS;
export type Skill = typeof SKILLS[Keys];
