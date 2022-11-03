<script lang="ts">
	/***
	 * NOT PART OF WORKSHOP
	 *
	 * It should not be necessary to familiarize oneself with this file for the workshop.
	 *
	 * This file contains the company logo of Miles.
	 */

	import logo from './miles-logo.svg';
</script>

<div class="container">
	<a href="https://www.miles.no/" target="_blank" rel="noreferrer">
		<img src={logo} alt="Miles" />
	</a>
</div>

<style>
	.container {
		width: 4em;
		height: 4em;
		position: absolute;
		top: -8px;
		left: -8px;
	}

	.container > a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 0.5rem;
		background: url('$lib/_workshop-internals/style/rpgui/img/icons/shield-slot.png');
		background-size: contain;
		transition: all 0.2s ease-in-out;
	}
	.container > a:focus,
	.container > a:hover {
		background: url('$lib/_workshop-internals/style/rpgui/img/icons/shield.png');
		background-size: contain;
	}

	.container > a > img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
</style>
