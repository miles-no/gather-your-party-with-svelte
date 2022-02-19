import type { RequestHandler } from '@sveltejs/kit';

// GET /api/portraits/[id]
export const get: RequestHandler = async (request) => {
	const lookupId = request.params.id;
	const path = `/portraits/${lookupId}`;
	return { body: { url: path } };
};
