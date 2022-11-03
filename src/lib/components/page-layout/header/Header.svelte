<script lang="ts">
	import { page } from '$app/stores';
	import MilesLogo from '$lib/components/page-layout/header/MilesLogo.svelte';
</script>

<header>
	<MilesLogo />

	<nav>
		<ul class="rpgui-container framed-golden-2">
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li data-quest-1="header" data-quest-7 class:active={$page.url.pathname === '/creator'}>
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
		background: url('$lib/_workshop-internals/style/rpgui/img/icons/shield.png');
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

	nav a:focus,
	nav a:hover {
		color: var(--accent-color);
	}
</style>
