/// <reference types="@sveltejs/kit" />

declare module 'cowsay2' {
	const say: (text: string, options: { nowrap: boolean }) => string;
}
