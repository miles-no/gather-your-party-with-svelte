# Quest 1 - The Mighty Button

_*click* *click*.... Our heroes journey can not start if we can not even click a button!_

For consistent design and functionality we wish to create a Button component that can be reused in our application.

The component currently has the 3 variables `variant`, `small` and `disabled`, but they are not exposed, and can not be
set by parent components.

Read about [Component Bindings](https://svelte.dev/tutorial/component-bindings) to find out more.

We also wish to expose the `click` event of the inner button so any parent components, as that is the main use case for
a button.

And lastly our button should also have some content. We wish for anything that is inside our Buttons tag to be reflected
into the inner button. Example: `<Button>The should be displayed inside the button</Button>`

Task can be found in: `src/lib/components/button/Button.svelte`

#### Goal

- Expose the variables `variant`, `small` and `disabled` so that they can be set by the parent component.
- Propagate the `click` event from the button to parent components.
- Use `slots` to display the content our Buttons html tag in parent components.

#### Useful links

- [Event Forwarding](https://svelte.dev/tutorial/event-forwarding)
- [Component Bindings](https://svelte.dev/tutorial/component-bindings)
- [Slots](https://svelte.dev/tutorial/slots)

#### Hints

- `npm run hint 1a`

# Quest 2 - ??

_No one hero is the same! Let them show their uniqueness_

Should we change bindings from attributes to class or race?

#### Goal

#### Useful links

- [Text Inputs](https://svelte.dev/tutorial/text-inputs)

#### Hints

- `npm run hint 2a`

# Quest 3 - Boosting our Heroes stats

_Our mighty heroes seem a bit weak. Luckily we are able to assist them by boosting their attributes effects on their
stats._

The point of this task is to use [Reactive Declarations](https://svelte.dev/tutorial/reactive-declarations) to change
one value whenever any referenced values change.

Task can be found in: `src/lib/components/stats/Stats.svelte`

#### Goal

- 1 point in **strength** should increase the **minimum damage** with **2**.
- 1 point in **strength** should increase the **maximum damage** with **3**.
- 1 point in **dexterity** should increase the **block chance** with **0.5**.
- 1 point in **constitution** should increase the **hitpoints** with **5**.
- 1 point in **wisdom** should increase the **mana** with **10**.
- 1 point in **intelligence** should increase the **spellpower** with **2.5**.
- When the **charisma** is **< 12** speech should be **Timid**, **> 12** speech should be **Well Spoken**, **> 16**
  speech should be **Charming**.

#### Useful links

- [Reactive Declarations](https://svelte.dev/tutorial/reactive-declarations)

#### Hints

- `npm run hint 3a`

# Quest 4 - Skills to desire

_Our heroes look mighty powerful! But they do still not seem satisfied... Maybe we should let them train som skills?_

The current solution provides a list of skills and those selected. The selection process offers no animation and just snaps.

We want an animation to occur when selecting and removing skills.

`src/lib/components/skill-select/SkillSelect.svelte`

#### Goal

- Use [Animations](https://svelte.dev/tutorial/animate) and [Transitions](https://svelte.dev/tutorial/transition) to animate the skill selection.

#### Useful links

- [Animations](https://svelte.dev/tutorial/animate)
- [Transitions](https://svelte.dev/tutorial/transition)

#### Hints

- `npm run hint 4a`

# Quest 5 - Indecisive Heroes

_Some of our heroes seem to need help to decide what attributes they have, and are requesting our assistance._

Svelte is full of useful tools for animating changes. Start by looking
into [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened) and how you can animate the attributes changing.

When this is working for `addPoint` and `subtractPoint` fill inn the `randomize` button. Remember to also update and
animate `pointsRemaining`.

Task can be found in: `src/lib/components/attribute-overview/AttributeOverview.svelte`

#### Goal

- Use [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened) to animate numbers changing.
- Fill inn the `randomize` method with logic to randomly assign attribute points.

#### Useful links

- [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened)

#### Hints

- `npm run hint 5a`

# Quest 6 - Beauties and the Beasts

_Someone has vandalized our hall of fame, and all our heroes pictures were stolen_
_Help them recreate their pictures._

`src/lib/components/portraits/portrait-selection/PortraitSelection.svelte`

#### Goal

-

#### Useful links

- [Await Blocks](https://svelte.dev/tutorial/await-blocks)

#### Hints

- `npm run hint 6a`

# Quest 7 - Recruitment Board

_I swear I saw the recruitment board somewhere around here..._

`src/routes/characters/index.svelte`

#### Goal

- `Characters` should be displayed in the nav-bar.
- When clicked it should go the URL `/characters`

#### Useful links

- [Await Blocks](https://svelte.dev/tutorial/await-blocks)
- [Each Blocks](https://svelte.dev/tutorial/each-blocks)

#### Hints

- `npm run hint 7a`

# Quest 8 - Recruitment List

_Some lore text_

Add Character List

`src/routes/characters/index.svelte`

#### Goal

#### Useful links

- [Await Blocks](https://svelte.dev/tutorial/await-blocks)
- [Each Blocks](https://svelte.dev/tutorial/each-blocks)

#### Hints

- `npm run hint 7a`

# Titan Quest 1 - Select your hero!

_Our heroes stand tall in our Hall of Fame, but some of our visitors want a personal audience with some of the heroes._

#### Goal

#### Useful links

#### Hints

- `npm run hint t1a `

####

- [Reactive Bindings](https://svelte.dev/tutorial/reactive-declarations)
- [Logic Blocks](https://svelte.dev/tutorial/if-blocks)
- [Bindings](https://svelte.dev/tutorial/text-inputs)
- [Events](https://svelte.dev/tutorial/event-forwarding)
- [Lifecycle](https://svelte.dev/tutorial/onmount)
- [Slots](https://svelte.dev/tutorial/slots)
- [SvelteKit Routing](https://kit.svelte.dev/docs#routing)
- [SvelteKit Loading](https://kit.svelte.dev/docs#loading)
- [Motion (Tween/Spring)](https://svelte.dev/tutorial/tweened)
- [Animations](https://svelte.dev/tutorial/animate)
- [Transitions](https://svelte.dev/tutorial/transition)
