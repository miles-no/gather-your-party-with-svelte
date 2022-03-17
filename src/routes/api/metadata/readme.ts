/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting a specific portrait.
 */

import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';

// GET /api/metadata/readme
export const get: RequestHandler = async () => {
	const path = 'README.md';
	const data = fs.readFileSync(path, 'utf-8');

	return { body: data };
};
