/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting the readme raw data.
 */

import type { RequestHandler } from './$types';
import fs from 'fs';

const README_PATH = 'README.md';

// GET /api/metadata/readme
export const GET: RequestHandler = async () => {
	const data = fs.readFileSync(README_PATH, 'utf8');

	return new Response(data);
};
