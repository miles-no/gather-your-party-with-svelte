<script lang="ts">
	import { page } from '$app/stores';
	import MilesLogo from '$lib/components/header/MilesLogo.svelte';
</script>

<header>
	<MilesLogo />

	<nav>
		<ul class="rpgui-container framed-golden-2">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/creator'}>
				<a sveltekit:prefetch href="/creator">Character Creator</a>
			</li>
			<!-- Quest 7 - Recruitment Board: Enter HTML markup here START -->

			<!-- Quest 7 - Recruitment Board: Enter HTML markup here END -->
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-around;
	}

	ul {
		position: relative;
		padding: 0;
		margin-top: -0.6em;
		display: flex;
		list-style: none;
	}

	li {
		position: relative;
		margin-left: 0;
	}

	li.active::before {
		--size: 40px;
		content: '';
		width: var(--size);
		height: var(--size);
		position: absolute;
		top: 1em;
		left: calc(50% - var(--size) / 2);
		background: url('$lib/themes/rpg-ui/img/icons/shield.png');
		background-size: contain;
	}

	nav a {
		display: flex;
		padding: 0 1em;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.1s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
