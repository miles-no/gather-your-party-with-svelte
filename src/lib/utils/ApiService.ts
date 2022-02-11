/***
 * NOT PART OF WORKSHOP
 *
 * It should not be necessary to familiarize oneself with this file for the workshop.
 *
 * This file contains logic for simulating a delay in the otherwise very fast API,
 * as well as logic for handling states of an API-call.
 */

import { sleep } from '$lib/utils/sleep';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

type ResponseStatus = 'success' | 'failure';

interface ResponseStatuses {
	Success: 'success';
	Failure: 'failure';
}
export const RESPONSE_STATUSES: ResponseStatuses = {
	Success: 'success',
	Failure: 'failure',
};

const FAKE_DELAY_LIMITS = { min: 1, max: 3 };

interface FetchOptions {
	clearAfter?: number;
}

export class ApiService<T> {
	private _clearTimeoutId: NodeJS.Timeout;

	private _isLoading = writable<boolean>(false);
	public get isLoading(): Writable<boolean> {
		return this._isLoading;
	}
	private _responseStatus = writable<ResponseStatus>(undefined);
	public get responseStatus(): Writable<ResponseStatus> {
		return this._responseStatus;
	}
	private _response = writable<T>(undefined);
	public get response(): Writable<T> {
		return this._response;
	}
	private _error = writable<Error>(undefined);
	public get error(): Writable<Error> {
		return this._error;
	}

	public clear = (): void => {
		this._isLoading.set(false);
		this._responseStatus.set(undefined);
		this._response.set(undefined);
		this._error.set(undefined);
	};

	public fetch = async (
		input: RequestInfo,
		init?: RequestInit,
		options?: FetchOptions,
	): Promise<T> => {
		this.clear();

		this._isLoading.set(true);

		clearTimeout(this._clearTimeoutId);

		return fetch(input, init)
			.then(async (response) => {
				// Sleep for a random time to simulate a bit slower API
				await sleep(FAKE_DELAY_LIMITS);

				this._isLoading.set(false);

				if (options?.clearAfter) {
					this._clearTimeoutId = setTimeout(this.clear, options.clearAfter);
				}

				if (response.status >= 400) {
					const error = new Error(await response.text());

					this._responseStatus.set(RESPONSE_STATUSES.Failure);
					this._error.set(error);

					throw error;
				} else {
					const json = await response.json();
					this._responseStatus.set(RESPONSE_STATUSES.Success);
					this._response.set(json);

					return json;
				}
			})
			.catch(async (error) => {
				// Sleep for a random time to simulate a bit slower API
				await sleep(FAKE_DELAY_LIMITS);

				if (options?.clearAfter) {
					this._clearTimeoutId = setTimeout(this.clear, options.clearAfter);
				}

				this._isLoading.set(false);
				this._responseStatus.set(RESPONSE_STATUSES.Failure);
				this._error.set(error);

				throw error;
			});
	};
}
