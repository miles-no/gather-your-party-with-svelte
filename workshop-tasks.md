# Quest 1 - Choose your origin

#### Lore

Born different, but with one same goal on their mind.

#### Intro

One of the main qualities of components is its ability to pass data in and out.
In Svelte, one way to accomplish this is by exposing [props](https://svelte.dev/tutorial/declaring-props)
and using [bindings](https://svelte.dev/tutorial/text-inputs), which is the two-way binding for Svelte.

#### Files

- `src/lib/components/race-select/RaceSelect.svelte`
- `src/routes/creator/index.svelte`

#### Goal

- Changing the race selector should update the character data, see the 'Character Debug' panel for details. (See hint 1a)
- Changing the race of the character should be reflected in the parent component.

#### Links

- [Declaring props](https://svelte.dev/tutorial/declaring-props)
- [Bindings](https://svelte.dev/tutorial/text-inputs)

#### Hints

- `npm run hint 1a`
- `npm run hint 1b`
- `npm run hint 1c`
- `npm run hint 1d`

# Quest 2 - The Mighty Button

#### Lore

_click_ _click_.... Our heroes' journey can not start if we can not even click a button!

#### Intro

For consistent design and functionality we wish to create a Button component that can be reused in our application.

The Button component currently has the three variables `variant`, `small` and `disabled`, but they are currently not
exposed, and can not be set by parent components.

We also wish to expose the `click` event of the inner button so any parent components, as that is the main use case for
a button.

Lastly, our button should also have some content. We wish for anything that is inside our Buttons tag to be reflected
into the inner button. Example: `<Button>This should be displayed inside the button</Button>`.
In Svelte this is done using [Slots](https://svelte.dev/tutorial/slots).

#### Files

- `src/lib/components/button/Button.svelte`

#### Goal

- Expose the variables `variant`, `small` and `disabled` so that they can be set by the parent component.
- Propagate the `click` event from the button to parent components.
- Use `slots` to display the content our Buttons html tag in parent components.

#### Links

- [Declaring props](https://svelte.dev/tutorial/declaring-props)
- [Event Forwarding](https://svelte.dev/tutorial/event-forwarding)
- [DOM Event Forwarding](https://svelte.dev/tutorial/dom-event-forwarding)
- [Slots](https://svelte.dev/tutorial/slots)

#### Hints

- `npm run hint 2a`
- `npm run hint 2b`

# Quest 3 - Boosting our Heroes' stats

#### Lore

Our mighty heroes seem a bit weak. Luckily we are able to assist them by boosting their attributes effects on their
stats.

#### Intro

Currently, the attributes do not affect the stats in any way.
In the goals section you can see how we wish for attributes to effect stats,
you should be able to see any changes as they occur when it works correctly.

To accomplish our goal we can use [Reactive Declarations](https://svelte.dev/tutorial/reactive-declarations) to change
one value whenever any referenced values change.

The parent component is already passing the attributes to the Stats component in the character creator.

#### Files

- `src/lib/components/attributes/stats/Stats.svelte`

#### Goal

- strength increases minimum damage with 2.
- strength increases maximum damage with 3.
- dexterity increases block chance with 0.5.
- constitution increases hitpoints with 5.
- wisdom increases mana with 10.
- intelligence increases spellpower with 2.5.
- when charisma is < 12 speech should be `Timid`, >= 12 speech should be `Well Spoken`, >16 speech should be `Charming`.

#### Links

- [Reactive Declarations](https://svelte.dev/tutorial/reactive-declarations)

#### Hints

- `npm run hint 3a`
- `npm run hint 3b`
- `npm run hint 3c`

# Quest 4 - Skills to desire

#### Lore

Our heroes look mighty powerful! But they do still not seem satisfied... Maybe we should let them train som skills?

#### Intro

The current solution provides a list of skills and those selected.
Currently, when selecting a skill, the skill is instantly moved between the two lists.

To ease our heroes' weary eyes we want to animate the items moving between the two lists.

Svelte offers powerful motion tools to deal with simple transitions, or more advanced animations when taking elements
in or out of the DOM and moving them somewhere else.

Here, when selecting a skill, the button is removed from the list it was in, and added to the DOM in the other list.
For removing and adding elements to the DOM Svelte offers several transition directives, each with a different effect.
Most of these deal only with the position the element is in when it's removed or should appear when it's added.
But others have logic for transitioning the element between where it's added, i.e. received, and where it's removed,
i.e. sent. These are called [Deferred Transitions](https://svelte.dev/tutorial/deferred-transitions).

These kind of transitions allows us to move an element between where it's added or removed and to where it's new
position is.

Svelte _also_ offers us animation directives for animating the _surrounding_ elements in the DOM, which aren't
transitioning. This allows us to make very convincing animations where many elements move "naturally".

#### Files

- `src/lib/components/skill-select/SkillSelect.svelte`

#### Goal

- Use [Deferred Transitions](https://svelte.dev/tutorial/deferred-transitions) to animate the skill selection,
  making a clicked skill move smoothly from one list to the other.
- Use [Animations](https://svelte.dev/tutorial/animate) to animate the movement of the other elements in the list
  when an element is clicked and moves between them.

#### Links

- [Deferred Transitions](https://svelte.dev/tutorial/deferred-transitions)
- [Animations](https://svelte.dev/tutorial/animate)

#### Hints

- `npm run hint 4a`
- `npm run hint 4b`

# Quest 5 - Indecisive Heroes

#### Lore

Some of our heroes seem to need help to decide what attributes they have, and are requesting our assistance.

#### Intro

Svelte is full of useful tools for animating changes. Start by looking into
[Motion (Tweened)](https://svelte.dev/tutorial/tweened) or
[Motion (Spring)](https://svelte.dev/tutorial/spring) and how you can animate the attributes changing.

Remember to also update and animate `pointsRemaining`.

Play around with the motion settings to see how it affects the animation.

Tip: It's often a good idea to maintain two separate variables when working with animating UI elements: one for the
_actual_ value, and another "display"-value that animates/moves towards the real value when it changes.

Tip 2: It can be difficult to see the attributes changing when increasing or decreasing them by 1 with the +/- buttons,
but using the randomize button will produce a more visible effect.

#### Files

- `src/lib/components/attributes/attribute-overview/AttributeOverview.svelte`

#### Goal

- Use [Motion (Tweened)](https://svelte.dev/tutorial/tweened) or [Motion (Spring)](https://svelte.dev/tutorial/spring)
  to animate the attributes changing and points remaining when they are increased, decreased, or randomized.

#### Links

- [Motion (Tweened)](https://svelte.dev/tutorial/tweened)
- [Motion (Spring)](https://svelte.dev/tutorial/spring)

#### Hints

- `npm run hint 5a`
- `npm run hint 5b`
- `npm run hint 5c`

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
  - Note: The portrait data is located at the URL `/api/portraits/{ID}`.
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

- `src/lib/components/page-layout/header/Header.svelte`
- `src/routes/...`
- `src/lib/components/characters/character-preview/CharacterPreview.svelte`

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

# Titan Quest 1 - Select your Hero!

#### Lore

Our heroes stand tall in our Hall of Fame, but some of our visitors want a personal audience with some of the heroes.

#### Intro

After implementing the Recruitment Board in Quest 7, we're able to view a quick preview of all the heroes. But what if
we wanted to view _all_ the information about a hero as well? To accomplish this, you should create a new page for
displaying a character.

To accomplish this, a SvelteKit route with a slug/parameter to reference the character ID is recommended. To access this
parameter, SvelteKit's [load](https://kit.svelte.dev/docs#loading) function can be used in a
`<script context="module" lang="ts">` tag in your component.

The character page should be accessed by clicking one of the character previews in the Characters page. This link is
already set up in the `CharacterPreview` component.

#### Files

- `src/lib/components/characters/character-preview/CharacterPreview.svelte`
- `src/routes/characters/[uid].svelte`

#### Goal

- Add a Character page component.
- In a `<script context="module" lang="ts">` tag in your component, access the `uid` parameter in a `load` function and
  expose it as a prop to the normal `<script>` tag.
- In your normal `<script>` tag, fire a call to the API to get the character, handling loading states of the promise.
- Display all the information about the character on the page, using any existing components you find relevant, and
  implementing your own display of information about the character and your own CSS styles to achieve this.

#### Links

- [load](https://kit.svelte.dev/docs#loading)
- [Routing: Pages](https://kit.svelte.dev/docs#routing-pages)
- [onMount](https://svelte.dev/docs#run-time-svelte-onmount)
- [svelte:head](https://svelte.dev/docs#template-syntax-svelte-head)
- [Await Blocks](https://svelte.dev/tutorial/await-blocks)

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
- `npm run hint t2b`
