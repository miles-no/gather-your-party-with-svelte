import type { Session } from '$lib/types/session';
import fs from 'fs';
import path from 'path';

export const getSession = (): Session => {
	const readme = fs.readFileSync(path.resolve('README.md'), { encoding: 'utf8' });

	return { readme };
};
