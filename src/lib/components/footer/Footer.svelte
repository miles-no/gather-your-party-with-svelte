<footer class="grid">
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
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 0.25rem;
		margin-bottom: 1rem;
	}

	footer a {
		margin: 0 0.5em;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		grid-column: 2;
		grid-row: 1;
	}

	.right {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		grid-column: 3;
		grid-row: 1;
	}

	@media (max-width: 1300px) {
		footer {
			grid-template-rows: 1fr 1fr;
		}

		.center {
			grid-column: 1/4;
			grid-row: 1;
		}

		.right {
			justify-content: center;
			grid-column: 1/4;
			grid-row: 2;
		}
	}
</style>
