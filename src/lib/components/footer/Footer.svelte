<footer>
	<div class="left" />
	<div class="center">
		<a href="https://github.com/miles-no/booster2022-gather-your-party-with-svelte" target="_blank"
			>GitHub</a
		>
		<div>|</div>
		<a href="https://svelte.dev/tutorial/basics" target="_blank">Svelte Docs</a>
		<div>|</div>
		<a href="https://kit.svelte.dev/docs" target="_blank">SvelteKit Docs</a>
	</div>
	<div class="right">
		<a href="https://github.com/dagerikhl" target="_blank">dagerikhl@github</a>
		<a href="https://github.com/palexcast" target="_blank">palexcast@github</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		padding: 0.5em 0;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	footer a {
		margin: 0 0.5em;
	}

	a {
		white-space: nowrap;
	}

	.left,
	.center,
	.right {
		width: 30%;
		display: flex;
		flex-wrap: nowrap;
		min-width: 250px;
		flex-grow: 1;
		padding: 0.25em 0;
	}

	.center {
		justify-content: center;
	}

	.center a {
		font-weight: 600;
	}

	.right {
		justify-content: flex-end;
	}
</style>
