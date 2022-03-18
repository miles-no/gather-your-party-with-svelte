<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const MIN = 8;
	const MAX = 25;
	const DIFF = MAX - MIN;

	const strength = tweened(0, {
		duration: 800,
		easing: cubicOut,
	});
</script>

<button on:click={() => strength.set(MIN + Math.random() * DIFF)}>Randomize Strength</button>

<progress value={($strength - MIN) / DIFF} />
Strength: {Math.round($strength)}
