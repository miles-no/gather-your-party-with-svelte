<script lang="ts">
	import AnimationsExample from '$lib/_presentation-examples/AnimationsExample/index.svelte';
	import NameInput from '$lib/_presentation-examples/BindingsAndEventsExample/index.svelte';
	import PortraitPreview from '$lib/_presentation-examples/BlocksExample/index.svelte';
	import Button from '$lib/_presentation-examples/ComponentsExample/index.svelte';
	import PortraitsViewer from '$lib/_presentation-examples/LifecycleExample/index.svelte';
	import StrengthPicker from '$lib/_presentation-examples/MotionExample/index.svelte';
	import Counter from '$lib/_presentation-examples/ReactivityExample/index.svelte';
	import HelloMessage from '$lib/_presentation-examples/TransitionsExample/index.svelte';
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

	<h2>Lifecycle Example</h2>
	<div>
		<PortraitsViewer />
	</div>

	<h2>Motion Example</h2>
	<div>
		<StrengthPicker />
	</div>

	<h2>Transitions Example</h2>
	<div>
		<HelloMessage />
	</div>

	<h2>Animations Example</h2>
	<div>
		<AnimationsExample />
	</div>
</section>

<style>
	section {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	section > h2 {
		padding: 2rem 0;
		margin: 2rem 0;
		text-align: left;
		border-top: 1px solid black;
	}

	section > div {
	}

	:global(button) {
		padding: 1rem 2rem;
	}
</style>
