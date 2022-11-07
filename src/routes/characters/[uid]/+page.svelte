<script lang="ts">
	import { PageData } from './$types';
	import { onMount } from 'svelte';
	import Loader from '$lib/components/loader/Loader.svelte';
	import type { Character } from '$lib/types/character';
	import { apiFetch } from '$lib/utils/api-fetch';

	export let data: PageData;

	/**
	 * Titan Quest 1 - Select your Hero: Implement fetching of character here START
	 */

	/**
	 * Titan Quest 1 - Select your Hero: Implement fetching of character here END
	 */
</script>

<!-- Titan Quest 1 - Select your Hero: Replace HTML markup here START -->
<p>You've discovered a Titan Quest!</p>

<p>This page has been rampaged by the Terrible Odious Demon Overlord and we need your help!</p>
<p>We were supposed to see information about our heroes here, but it has been stolen from us.</p>
<p>Can you help?</p>

<!-- Titan Quest 1 - Select your Hero: Replace HTML markup here END -->
<style>
	/* Titan Quest 1 - Select your Hero: Enter CSS styles here START */

	/* Titan Quest 1 - Select your Hero: Enter CSS styles here END */
</style>
