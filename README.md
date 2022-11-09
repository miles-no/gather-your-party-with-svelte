# Gather your Party with Svelte

## Getting started

1. Make sure you have Node v16.14+ installed with `node --version`.
2. Clone the repository to your work environment: `git clone git@github.com:miles-no/gather-your-party-with-svelte.git`
   or `git clone https://github.com/miles-no/gather-your-party-with-svelte.git`.
3. Install dependencies with `npm install`.
4. To start the development server and open the application: `npm run dev -- --open`.

## Workshop

All tasks are listed in file `workshop-tasks.md` located in the root of the project.

Both this file and the `workshop-tasks` file can be viewed on the [homepage](http://localhost:3000).

### Solutions

When working with quests there will always be an accompanying solutions file.

If the task is located in `my-quest.svelte` the solution file will be called `my-quest.SOLUTION.svelte`.

Use this knowledge at your own discretion, but we HIGHLY recommend not looking at these unless you are out of other
options.

## Tips

- To clear local data (characters that have been saved), run `npm run clear-data`.
- If you're unfamiliar with TypeScript and do not wish to use it in your Svelte component files, you can remove
  the `lang="ts"` attribute at the top of the `<script>` tag, and strip out any TypeScript types in the file.
- While it's not necessary, if you like using a code style formatter, `prettier` is set up in this project.
  You can run it in two different ways:
  - If you have it set up in your Editor you can run it via the editor on the file you're working on.
  - Run `npm run format` in the terminal to format all your sourcefiles.

### Building

To build the application run: `npm run build`

### Alternative: Workshop using Codesandbox as IDE

<!-- TODO Creating a CS template isn't working for the moment, can't fork an imported repo in CS -->
<!--
#### Use existing template (Recommended)

1. Create an account on [https://codesandbox.io](https://codesandbox.io).
2. Go to [https://codesandbox.io/s/TODO](https://codesandbox.io/s/TODO) and start hacking!
-->

#### Create new template

1. Go to [https://codesandbox.io](https://codesandbox.io).
2. Login with your user.
3. Click `Create`.
4. Select `Import from GitHub`.
5. Paste in `https://github.com/miles-no/gather-your-party-with-svelte.git`.
6. Click `Import and Fork`.

## Links

- [Miles](https://www.miles.no)
- Powered by [create-svelte](https://github.com/sveltejs/kit/tree/master/packages/create-svelte)
- [Svelte Workshop Repository](https://github.com/miles-no/gather-your-party-with-svelte)
- [Svelte Workshop Presentation](https://github.com/miles-no/gather-your-party-with-svelte/blob/main/docs/Presentation.pdf)
- [Svelte Tutorial](https://svelte.dev/tutorial/basics)
- [Svelte Docs](https://svelte.dev/docs)
- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Feedback](https://forms.gle/uVbWJuUV2R9N1z1V6)
