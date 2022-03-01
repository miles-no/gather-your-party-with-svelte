<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	interface LoadProps {
		uid: string;
	}

	/**
	 * Titan Quest 1 - Select your Hero: Implement load function here START
	 */
	export const load: Load<LoadProps, LoadProps> = () => {
		return {};
	};
	/**
	 * Titan Quest 1 - Select your Hero: Implement load function here END
	 */
</script>

<script lang="ts">
	import Loader from '$lib/components/loader/Loader.svelte';
	import type { Character } from '$lib/types/character';
	import { apiFetch } from '$lib/utils/api-fetch';
	import { onMount } from 'svelte';

	export let uid: string = undefined;

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
