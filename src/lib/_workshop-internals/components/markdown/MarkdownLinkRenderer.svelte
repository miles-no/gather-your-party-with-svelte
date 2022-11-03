<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 */

	export let href = '';
	export let title: string;
</script>

<a {href} target="_blank" rel="noreferrer" {title}><slot /></a>
