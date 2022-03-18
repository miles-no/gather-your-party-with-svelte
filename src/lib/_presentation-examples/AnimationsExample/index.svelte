<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';

	let todos = ['create a hero', 'level up', 'take first boss'];

	// NB: This (`crossfade`) is a transition, `flip` is the animation
	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),
		fallback: () => ({
			duration: 600,
			css: (t) => `transform: scale(${t}); opacity: ${t}`,
		}),
	});
</script>

{#each todos as todo (todo)}
	<button
		in:receive={{ key: todo }}
		out:send={{ key: todo }}
		animate:flip
		on:click={() => (todos = todos.filter((e) => e !== todo))}
	>
		{todo}
	</button>
{/each}
