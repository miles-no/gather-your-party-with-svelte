<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import SvelteMarkdown from 'svelte-markdown';
	import MarkdownCodespanRenderer from './MarkdownCodespanRenderer.svelte';
	import MarkdownLinkRenderer from './MarkdownLinkRenderer.svelte';

	export let source: string = undefined;
	export let renderers: object = undefined;
	export let options: object = undefined;
	export let isInline: boolean = undefined;

	$: renderersWithDefault = {
		...(renderers ?? {}),
		codespan: MarkdownCodespanRenderer,
		link: MarkdownLinkRenderer,
	};
</script>

<SvelteMarkdown {source} renderers={renderersWithDefault} {options} {isInline} on:parsed />
