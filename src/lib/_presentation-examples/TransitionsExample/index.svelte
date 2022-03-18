<script lang="ts">
	import { fly } from 'svelte/transition';

	const scale = (node, { delay = 0, duration = 2000 }) => ({
		delay,
		duration,
		css: (t, u) => `
      font-size: calc(1em * ${u * 2 + 1});
      opacity: ${t};
    `,
	});

	let visible = false;
</script>

<button on:click={() => (visible = !visible)}>Say {visible ? 'goodbye' : 'hello'}</button>

{#if visible}
	<p in:fly={{ x: -200, duration: 2000 }} out:scale>Hello there</p>
{/if}
