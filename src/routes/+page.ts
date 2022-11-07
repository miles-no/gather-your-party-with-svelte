/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * The frontpage/homepage of our application.
 */

import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const readmeResponse = await fetch('/api/metadata/readme');
	const readme = await readmeResponse.text();

	return { readme };
};
