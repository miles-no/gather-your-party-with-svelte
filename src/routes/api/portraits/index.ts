/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting all characters and adding new characters.
 */

import type { RequestHandler } from '@sveltejs/kit';

const Index = [
	'portrait_01.jpg',
	'portrait_02.jpg',
	'portrait_03.jpg',
	'portrait_04.jpg',
	'portrait_05.jpg',
	'portrait_06.jpg',
	'portrait_07.jpg',
	'portrait_08.jpg',
	'portrait_09.jpg',
	'portrait_10.jpg',
	'portrait_11.jpg',
	'portrait_12.jpg',
	'portrait_13.jpg',
	'portrait_14.jpg',
	'portrait_15.jpg',
	'portrait_16.jpg',
	'portrait_17.jpg',
	'portrait_18.jpg',
	'portrait_19.jpg',
	'portrait_20.jpg',
	'portrait_21.jpg',
	'portrait_22.jpg',
	'portrait_23.jpg',
	'portrait_24.jpg',
];

// GET /api/portraits
export const get: RequestHandler = async () => {
	return { body: Index };
};
