<script lang="ts">
	import { page } from '$app/stores';
	import logo from './miles-logo.svg';
</script>

<header>
	<div class="corner">
		<a href="https://www.miles.no/" target="_blank">
			<img src={logo} alt="Miles" />
		</a>
	</div>

	<nav>
		<ul class="rpgui-container framed-golden-2">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/creator'}>
				<a sveltekit:prefetch href="/creator">Character Creator</a>
			</li>
			<li class:active={$page.path === '/characters'}>
				<a sveltekit:prefetch href="/characters">Characters</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-around;
		position: sticky;
		top: 0;
		z-index: 10000;
	}

	.corner {
		width: 4em;
		height: 4em;
		position: absolute;
		top: -8px;
		left: -8px;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 0.5rem;
		background: url('$lib/themes/rpg-ui/img/icons/shield-slot.png');
		background-size: contain;
		transition: all 0.2s ease-in-out;
	}
	.corner a:hover {
		background: url('$lib/themes/rpg-ui/img/icons/shield.png');
		background-size: contain;
	}

	.corner a img {
		width: 2em;
		height: 2em;
		object-fit: contain;
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
