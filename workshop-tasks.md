# Quest 1 - The Mighty Button

#### Lore

_click_ _click_.... Our heroes journey can not start if we can not even click a button!

#### Intro

For consistent design and functionality we wish to create a Button component that can be reused in our application.

The component currently has the 3 variables `variant`, `small` and `disabled`, but they are not exposed, and can not be
set by parent components.

Read about [Component Bindings](https://svelte.dev/tutorial/component-bindings) to find out more.

We also wish to expose the `click` event of the inner button so any parent components, as that is the main use case for
a button.

And lastly our button should also have some content. We wish for anything that is inside our Buttons tag to be reflected
into the inner button. Example: `<Button>The should be displayed inside the button</Button>`

#### Files

- `src/lib/components/button/Button.svelte`

#### Goal

- Expose the variables `variant`, `small` and `disabled` so that they can be set by the parent component.
- Propagate the `click` event from the button to parent components.
- Use `slots` to display the content our Buttons html tag in parent components.

#### Links

- [Event Forwarding](https://svelte.dev/tutorial/event-forwarding)
- [Component Bindings](https://svelte.dev/tutorial/component-bindings)
- [Slots](https://svelte.dev/tutorial/slots)

#### Hints

- `npm run hint 1a`

# Quest 2 - ??

#### Lore

No one hero is the same! Let them show their uniqueness

#### Intro

Should we change bindings from attributes to class or race?

#### Files

#### Goal

#### Links

- [Text Inputs](https://svelte.dev/tutorial/text-inputs)

#### Hints

- `npm run hint 2a`

# Quest 3 - Boosting our Heroes stats

#### Lore

Our mighty heroes seem a bit weak. Luckily we are able to assist them by boosting their attributes effects on their
stats.

#### Intro

The point of this task is to use [Reactive Declarations](https://svelte.dev/tutorial/reactive-declarations) to change
one value whenever any referenced values change.

#### Files

- `src/lib/components/stats/Stats.svelte`

#### Goal

- 1 point in **strength** should increase the **minimum damage** with **2**.
- 1 point in **strength** should increase the **maximum damage** with **3**.
- 1 point in **dexterity** should increase the **block chance** with **0.5**.
- 1 point in **constitution** should increase the **hitpoints** with **5**.
- 1 point in **wisdom** should increase the **mana** with **10**.
- 1 point in **intelligence** should increase the **spellpower** with **2.5**.
- When the **charisma** is **< 12** speech should be **Timid**, **> 12** speech should be **Well Spoken**, **> 16**
  speech should be **Charming**.

#### Links

- [Reactive Declarations](https://svelte.dev/tutorial/reactive-declarations)

#### Hints

- `npm run hint 3a`

# Quest 4 - Skills to desire

#### Lore

Our heroes look mighty powerful! But they do still not seem satisfied... Maybe we should let them train som skills?

#### Intro

The current solution provides a list of skills and those selected. The selection process offers no animation and just snaps.

We want an animation to occur when selecting and removing skills.

#### Files

`src/lib/components/skill-select/SkillSelect.svelte`

#### Goal

- Use [Animations](https://svelte.dev/tutorial/animate) and [Transitions](https://svelte.dev/tutorial/transition) to animate the skill selection.

#### Links

- [Animations](https://svelte.dev/tutorial/animate)
- [Transitions](https://svelte.dev/tutorial/transition)

#### Hints

- `npm run hint 4a`

# Quest 5 - Indecisive Heroes

#### Lore

Some of our heroes seem to need help to decide what attributes they have, and are requesting our assistance.

#### Intro

Svelte is full of useful tools for animating changes. Start by looking
into [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened) and how you can animate the attributes changing.

When this is working for `addPoint` and `subtractPoint` fill inn the `randomize` button. Remember to also update and
animate `pointsRemaining`.

#### Files

- `src/lib/components/attribute-overview/AttributeOverview.svelte`

#### Goal

- Use [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened) to animate numbers changing.
- Fill inn the `randomize` method with logic to randomly assign attribute points.

#### Links

- [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened)

#### Hints

- `npm run hint 5a`

# Quest 6 - Beauties and the Beasts

#### Lore

Someone has vandalized our hall of fame, and all our heroes' pictures were stolen! Help them recreate their pictures.

#### Intro

Currently, the `PortraitPicker` component shows a modal where we should be able to pick a portrait for our character,
but nothing shows up.

To get a portrait we first have to fetch a list of portrait IDs from our server. We then have to fetch each portrait to
show it. Now, this is a lot of asynchronous logic, and we'll be dealing with
[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Promises might seem scary, but luckily Svelte has a special construct for dealing with them, _directly in our markup_:
[Await Blocks](https://svelte.dev/tutorial/await-blocks).

Short explanation of promises: When you "fire" a promise with a target URL, it goes through a couple of states:

1. First it's in a loading state while it resolves the URL.
2. Then it either:
   1. Resolves with a value.
   2. Rejects with an error.

In this task, you need to deal with two different promises, one which fetches all the portrait IDs, and another which
fires based on the resolved value of the first promise, and use await blocks to handle this in your markup.

To help you with dealing with the different states of the promises, the `Loader` and `PortraitPreview` components will
be essential.

#### Files

- `src/lib/components/portraits/portrait-selection/PortraitSelection.svelte`

#### Goal

- Use an await block to show three different things, based on the state of the `getPortraitsPromise` promise:
  - Loading: A `Loader` component.
  - Resolved: For now, just show the IDs that were fetched, see next goal for improving this.
  - Rejected: An error message.
- When you have a working await block for the list of portrait IDs, use an
  [each block](https://svelte.dev/tutorial/each-blocks) to iterate over each of the IDs and fetch the portrait itself.
  - Note: The portrait is located at the URL `api/portraits/{ID}`.
- Inside the each block, use another await block to render the different states of the portrait promises:
  - Loading: A `PortraitPreview` where the `isLoading` prop is set to `true`.
  - Resolved: A `PortraitPreview` with the value prop set to the `portrait` property on the resolved value.
  - Rejected: An error message.
- Feel free to style the portrait selector as you'd like.

#### Links

- [Await Blocks](https://svelte.dev/tutorial/await-blocks)
- [Each Blocks](https://svelte.dev/tutorial/each-blocks)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Hints

- `npm run hint 6a`
- `npm run hint 6b`
- `npm run hint 6c`

# Quest 7 - Recruitment Board

#### Lore

_I swear I saw the recruitment board somewhere around here..._

#### Intro

Now that we have a way of creating characters, we need to be able to see who's available! For that, we're going to
implement a recruitment board. This will be a whole new page in our
[Single-page application](https://developer.mozilla.org/en-US/docs/Glossary/SPA).

We need to take advantage of SvelteKit in this quest. SvelteKit gives us some great benefits, among them routing in our
application. For those familiar with [Next.js](https://nextjs.org/), SvelteKit works in a similar way, with file-based
routing.

Our recruitment board needs to get all created characters from our API, and display them as a list with som basic
information.

A basic component for showing a character has been created: `CharacterPreview.svelte`. Feel free to modify this to show
more information about the characters if you'd like.

#### Files

- `src/lib/components/header/Header.svelte`
- `src/routes/...`
- `src/lib/components/character-preview/CharacterPreview.svelte`

#### Goal

- Create an entry for the "Characters" page in the application header's navigation bar.
  - When clicked it should navigate to the URL `/characters`.
  - The link should be shown as the active link when at the `/characters` page.
- Create a new page for listing all existing characters.
  - Should use Svelte's `onMount` to fire a promise to get all characters from `/api/characters`. You can use the
    premade `apiFetch`, which returns a promise, function for making calls to the API.
  - Should use the `<svelte:head>` tag to change the title of the page.
  - Should handle the different states of the initial promise, just as in the previous quest.
  - You can use the `CharacterPreviewList` component to actually display the characters when resolved.
- Optionally modify `CharacterPreview` to show more information about the characters.

#### Links

- [Routing: Pages](https://kit.svelte.dev/docs#routing-pages)
- [sveltekit:prefetch](https://kit.svelte.dev/docs#anchor-options-sveltekit-prefetch)
  - Note: Not important to add, but a nice feature to be aware of.
- [onMount](https://svelte.dev/docs#run-time-svelte-onmount)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [svelte:head](https://svelte.dev/docs#template-syntax-svelte-head)
- [Await Blocks](https://svelte.dev/tutorial/await-blocks)

#### Hints

- `npm run hint 7a`
- `npm run hint 7b`

# Quest 8 - ???

[comment]: <> (TODO Do we have a Quest 8?)

#### Lore

#### Intro

#### Files

-

#### Goal

-

#### Links

-

#### Hints

- `npm run hint 8a`

# Titan Quest 1 - Select your hero!

[comment]: <> (TODO Finish this quest)

#### Lore

Our heroes stand tall in our Hall of Fame, but some of our visitors want a personal audience with some of the heroes.

#### Intro

#### Files

#### Goal

#### Links

#### Hints

- `npm run hint t1a`

# Titan Quest 2 - Fight!

#### Lore

The people only deserve the best heroes. Who will rise to the top as champion?

#### Intro

To evaluate which hero is the best combatant, we need to pit them against each other in a test of prowess.

For this quest, you're to implement a combat simulator which pits two heroes against each other, using their character
stats and perhaps some randomness to determine the best fighter.

You are free to simulate the combat any way you want to, but here's a few ideas to get you started:

- Establish your own page for the combat simulator.
- You can fetch any character, perhaps two random or picked characters, from the API.
- Each battle can be a single battle, or be a series of hits/attacks against each other.
  - Perhaps starting with a single attack and then implementing more would be a good start?
- Use the data available on each character to simulate a battle between the two.
- Svelte has many cool features to animate and move elements, check them out and see if any can be used to create cool
  effects!
  - Perhaps a [Transition](https://svelte.dev/tutorial/transition) to move the representation of the characters in to
    the "battlefield"? Or even an [Animation](https://svelte.dev/tutorial/animate) to actually move the elements from
    a character picker and into a designated "combatant slot" element?
  - Perhaps a [Tween](https://svelte.dev/tutorial/tweened) to gradually reduce stats or health bars?
  - Perhaps a [Spring](https://svelte.dev/tutorial/spring) to simulate movement of the character representations when
    they get hit?

#### Files

- Any deemed necessary.

#### Goal

- Simulate a battle between two characters with a winner, a loser, or a draw as the end result.

#### Links

- [Routing: Pages](https://kit.svelte.dev/docs#routing-pages)
- [onMount](https://svelte.dev/docs#run-time-svelte-onmount)
- [Svelte Tutorial](https://svelte.dev/tutorial/basics)
  - Demonstrates many features that can be used for this quest.

#### Hints

- `npm run hint t2a`
