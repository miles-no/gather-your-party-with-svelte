<script lang="ts">
	import AttributeOverview from '$lib/components/attributes/attribute-overview/AttributeOverview.SOLUTION.svelte';

	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	import SvelteMarkdown from 'svelte-markdown';
	import MarkdownLinkRenderer from './MarkdownLinkRenderer.svelte';

	export let source: string = undefined;
	export let renderers: object = undefined;
	export let options: object = undefined;
	export let isInline: boolean = undefined;

	$: renderersWithDefault = { ...(renderers ?? {}), link: MarkdownLinkRenderer };
</script>

<SvelteMarkdown {source} renderers={renderersWithDefault} {options} {isInline} on:parsed />
