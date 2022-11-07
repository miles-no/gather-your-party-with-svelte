/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting the readme raw data.
 */

import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';

// GET /api/metadata/readme
export const GET: RequestHandler = async () => {
	const path = 'README.md';
	const data = fs.readFileSync(path, 'utf8');

	return { body: data };
};
