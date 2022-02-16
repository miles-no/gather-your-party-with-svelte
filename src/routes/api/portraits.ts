/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains API endpoints for getting all characters and adding new characters.
 */

import type { RequestHandler } from '@sveltejs/kit';

const PORTRAITS = [
	'/portraits/portrait_01.jpg',
	'/portraits/portrait_02.jpg',
	'/portraits/portrait_03.jpg',
	'/portraits/portrait_04.jpg',
	'/portraits/portrait_05.jpg',
	'/portraits/portrait_06.jpg',
	'/portraits/portrait_07.jpg',
	'/portraits/portrait_08.jpg',
	'/portraits/portrait_09.jpg',
	'/portraits/portrait_10.jpg',
	'/portraits/portrait_11.jpg',
	'/portraits/portrait_12.jpg',
	'/portraits/portrait_13.jpg',
	'/portraits/portrait_14.jpg',
	'/portraits/portrait_15.jpg',
	'/portraits/portrait_16.jpg',
	'/portraits/portrait_17.jpg',
	'/portraits/portrait_18.jpg',
	'/portraits/portrait_19.jpg',
	'/portraits/portrait_20.jpg',
	'/portraits/portrait_21.jpg',
	'/portraits/portrait_22.jpg',
	'/portraits/portrait_23.jpg',
	'/portraits/portrait_24.jpg',
];

// GET /api/portraits
export const get: RequestHandler = async () => {
	return { body: PORTRAITS };
};
