<script lang="ts">
	import NameInput from '$lib/_presentation-examples/BindingsAndEventsExample/index.svelte';
	import PortraitPreview from '$lib/_presentation-examples/BlocksExample/index.svelte';
	import Button from '$lib/_presentation-examples/ComponentsExample/index.svelte';
	import Counter from '$lib/_presentation-examples/ReactivityExample/index.svelte';
</script>

<svelte:head>
	<title>Presentation Examples</title>
</svelte:head>

<section>
	<h1>Presentation Examples</h1>

	<h2>Components Example</h2>
	<div>
		<Button hint="< Click me" small={false} disabled={false}>Click me!</Button>
	</div>

	<h2>Reactivity Example</h2>
	<div>
		<Counter />
	</div>

	<h2>Blocks Example</h2>
	<div>
		<PortraitPreview id="portrait_11.jpg" tags={['Human', 'Paladin']} />
	</div>

	<h2>Bindings and Events Example</h2>
	<div>
		<NameInput
			on:change={({ detail: { value } }) => console.log(value)}
			on:you-shall-not-enter={() => alert('No!!!')}
		/>
	</div>
</section>

<style>
	section {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	section > h2 {
		margin: 4rem 0;
	}

	section > div {
		margin-bottom: 2rem;
	}

	:global(button) {
		padding: 1rem 2rem;
	}
</style>
