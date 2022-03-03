/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains logic for simulating a delay in the otherwise very fast API,
 * as well as logic for handling states of an API-call.
 */

import { sleep } from '$lib/_workshop-internals/utils/sleep';

const FAKE_DELAY_LIMITS = { min: 1, max: 3 };

export const apiFetch = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> =>
	fetch(input, init)
		.then(async (response) => {
			// Sleep for a random time to simulate a bit slower API
			await sleep(FAKE_DELAY_LIMITS);

			if (response.status >= 400) {
				throw new Error(await response.text());
			} else {
				return (await response.json()) as T;
			}
		})
		.catch(async (error) => {
			// Sleep for a random time to simulate a bit slower API
			await sleep(FAKE_DELAY_LIMITS);

			console.error(error);

			throw error;
		});
