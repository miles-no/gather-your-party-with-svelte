<script context="module" lang="ts">
    import type {Session} from '$lib/types/session';
    import type {Load} from '@sveltejs/kit';
    import SvelteMarkdown from 'svelte-markdown';

    export const prerender = true;

    export const load: Load<{ session: Session }> = async ({session}) => ({
        props: {readme: session.readme},
    });
</script>

<script lang="ts">
    import {slide} from 'svelte/transition';

    export let readme: string;
    let readmeIsOpen = false;
    const toggleReadme = () => (readmeIsOpen = !readmeIsOpen);
</script>

<svelte:head>
    <title>Gather your party with Svelte!</title>
</svelte:head>

<section>
    <h1>Gather your party with Svelte!</h1>

    <button class="toggle-readme rpgui-button"
            on:click={toggleReadme}> {readmeIsOpen ? 'Hide' : 'Show' } Readme
    </button>
    {#if readmeIsOpen}
        <div class="readme" transition:slide={{ duration: 300 }}>
            <SvelteMarkdown source={readme}/>
        </div>
    {/if}
</section>

<style lang="css">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    h1 {
        width: 100%;
    }

    .readme {
        display: inline-block;
        max-height: 60vh;
        overflow-y: scroll;
        max-width: 100%;
        padding: 0.25em;
    }
</style>
