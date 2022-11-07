/// <reference types="@sveltejs/kit" />

declare namespace App {}

declare module 'cowsay2' {
	const say: (text: string, options: { nowrap: boolean }) => string;
}
