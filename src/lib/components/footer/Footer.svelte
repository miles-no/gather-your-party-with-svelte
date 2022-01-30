<footer>
    <div class="left">
    </div>
    <div class="center">
        <a href="https://github.com/miles-no/booster2022-gather-your-party-with-svelte" target="_blank">GitHub</a>
        <a href="https://svelte.dev/tutorial/basics" target="_blank">Svelte Docs</a>
        <a href="https://kit.svelte.dev/docs" target="_blank">SvelteKit Docs</a>
    </div>
    <div class="right">
        <a href="https://github.com/dagerikhl" target="_blank">github@dagerikhl</a>
        <a href="https://github.com/palexcast" target="_blank">github@palexcast</a>
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

    .left, .center, .right {
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

    .center a:not(:last-child)::after {
        content: '-';
        position: absolute;
        margin-left: 0.25em;
        font-weight: 400;
    }

    .right {
        justify-content: flex-end;
    }
</style>