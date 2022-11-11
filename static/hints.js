/* eslint max-len: ["error", { "code": 72 }] */

export const hints = {
	'1a': `\
On the 'Character Creator' page you can toggle 
'Character Debug' to view the raw character data json.
Try changing the class to see what happens.
This can be used to see if 'race' is set and is being updated.`,
	'1b': '\
Take a look at the referenced links for examples.',
	'1c': '\
Have you tried exporting `let race` in RaceSelect?',
	'1d': `\
Have you bound the 'race' value in 'src/routes/creator/+page.svelte'?
Look at how 'primaryClass' is bound.`,

	'2a': `\
If you are looking to expose props, you should explore
https://svelte.dev/tutorial/declaring-props.
It should be similar to what you did in Quest 1.`,
	'2b': `\
There are two ways you can expose events from a component.
https://svelte.dev/tutorial/event-forwarding &
https://svelte.dev/tutorial/dom-event-forwarding
Explore both ways, both can help you solve this quest.`,
	'2c': `\
As the inner 'button' in our Button component is a simple DOM
element, we can use DOM event forwarding: \`<button on:click>\`
without dispatching any events ourselves.
Now, any parent component should be able to declare an event
listener on our Button component:
\`<Button on:click={handleClick}>\`.`,

	'3a': `\
You can assign multiple reactive bindings which each rely on 
one prop inside the object \`attributes\`.`,
	'3b': `\
The syntax of Reactive Bindings might seem weird, 
but it is actually valid JavaScript, the 'labeled statement'.
\`$: myVar = attributes.someProp * 2;\``,
	'3c': `\
Minimum damage can be set like this:
\`$: meleeDamageMin = attributes.strength * 2;\``,
	'3d': `\
All of the variable declarations in our Stats file can be
replaced by reactive declarations based on the
\`attributes\` variable.`,

	'4a': `\
The Svelte tutorial for Animations is _very_ helpful here:
https://svelte.dev/tutorial/animate`,
	'4b': `\
Look at crossfade, and use the send and receive methods to
transition skills from one list to the other.
You can reuse the same transition for both buttons.`,
	'4c': `\
The crossfade transition's functions, send and receive,
both need a configuration specifying a \`key\` to know
where to send and receive an element when it's removed
from one place in the DOM and added to another.`,
	'4d': `\
Add an animation, flip, to make the movements of the other
buttons in the list smoother when a skill is clicked.
This can also be added and reused on both button elements.`,

	'5a': `\
It can be difficult to see the attributes changing when
increasing or decreasing them by 1 with the +/- buttons,
but using the randomize button will produce a more visible effect.`,
	'5b': `\
Instead of replacing the current values/object, create a new
springed/tweened object to use as the "display value", and set
this value to "target" the real value when the real value changes.`,
	'5c': `\
The \`$variable\` syntax of stores might be a bit confusing.
This is called auto-subscriptions, and is a way for you to subscribe to
the value of a store, without needing to handle the subscription (and
unsubscription) yourself. And in this case, a spring is a store!`,
	'5d': `\
Remember to update the display values when the real values are updated,
in your event handlers.`,
	'5e': `\
Not sure if it is working? Try setting the stiffness to
0.02 (spring) or the duration to a large number, e.g. 2000 (tweened)
to make it clearer.
You should see the animation clearly now.
Play around with the settings!`,

	'6a': `\
The first promise for fetching all the portrait IDs is already
being fired when the component mounts and can be used directly
in the await block: \`{#await getPortraitsPromise}\`.`,
	'6b': `\
The nested promise for fetching each portrait can be fired
inline in the await block, no extra code in the script tag
is needed. Can be called inline like this:
\`{#await apiFetch("your URL")}\`.`,
	'6c': `\
The \`PortraitPreview\` component takes three props and
dispatches one event:
- Prop \`value\`: The value of a portrait that it should show.
- Prop \`clickable\`: Boolean prop that makes the preview
  style itself to indicate it can be clicked.
- Prop \`isLoading\`: Shows a loading indicator inside
  the portrait frame to indicate that the portrait
  is currently loading.
- Event \`click\`: Fires when a clickable portrait is clicked.
  It provides the value of the portrait in its \`details\`
  object. You can listen to this event by using
  the \`on:click\` syntax.`,

	'7a': `\
You can look at the other navigation links in the Header
component for inspiration about adding your own link.`,
	'7b': `\
It might be a good idea to check out the other routes
to see examples of how to create a new page which loads
some data on mount.
Perhaps the Character creator page would be a good place to start?`,

	t1a: `\
We recommend exposing the \`uid\` param as a prop to
the component instead of using SvelteKit's fetch in the
\`load\` function, and using methods you know in your
""normal"" \`script\` tag to get the character from the API.`,

	t2a: `\
This is a wiiidely scoped quest.
Try to do a little at a time, iterating with more advanced
functionality as you go along.
A good start is just making the logic for picking two characters,
either by user interaction or by randomness.`,
	t2b: `\
To simulate a series of attacks you can use a \`setInterval\`
which will trigger some function at set intervals.
Combining that with other variables to determine who gets
to attack, what effect the attack has, and checks for
when the battle is over can be a way to implement this.`,
};
