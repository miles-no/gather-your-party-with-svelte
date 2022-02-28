import * as cowsay from 'cowsay';

const hints = {
	'1a': `\
In the file \`src/routes/creator/index.svelte\` 
you can set \`SHOW_CHARACTER_RAW_DATA\` to \`true\`
to view the character data at the bottom of the page.`,
	'1b': '\
Take a look at the referenced links for examples.',
	'1c': '\
Have you tried exporting `let race` in RaceSelect?',

	'2a': `\
If you are looking to expose props, you should explore https://svelte.dev/tutorial/declaring-props.
It should be similar to what you did in quest 1.
`,
	'2b': `\
There are two ways you can expose events from a component.
https://svelte.dev/tutorial/event-forwarding & https://svelte.dev/tutorial/dom-event-forwarding
Explore both ways, both can help you solve this quest.
`,

	'3a': `\
The parent component is already passing attributes, 
but Stats is not receiving them yet, as they are not exposed.`,
	'3b': `\
You can assign multiple reactive bindings which each rely on 
one prop of the object \`attributes\` each .`,
	'3c': `\
The syntax might seem wierd, but it is valid javascript. \`$: myVar = attributes.someProp;\``,

	'4a': `\
Look at crossfade, and use the send and receive methods to transition skills from list to the other.
You can reuse the same transition for both buttons.`,
	'4b': `\
Add an animation, for example flip to make the buttons disappearing smoother.
This can also be added and reused on both buttons`,

	'5a': `\
Start by getting the randomize function to work correctly.
Use a for or while loop to simulate a random selection.`,
	'5b': `\
Instead of replacing the current values/object, 
create a new springed object which you can set values for`,
	'5c': `\
Not sure if it is working? Try setting the stiffness to 0.02 to make it clearer,
you should see the animation clearly now. Play around with the settings!`,

	'6a': `\
The first promise for fetching all the portrait IDs is already being fired when
the component mounts and can be used directly in the await block:
\`{#await getPortraitsPromise}\`.`,
	'6b': `\
The nested promise for fetching each portrait can be fired inline in the await
block, no extra code in the script tag is needed. Can be called inline like
this: \`{#await apiFetch("your URL")}\`.`,
	'6c': `\
The \`PortraitPreview\` component takes three props and dispatches one event:
- Prop \`value\`: The value of a portrait that it should show.
- Prop \`clickable\`: Boolean prop that makes the preview style itself to
  indicate it can be clicked.
- Prop \`isLoading\`: Shows a loading indicator inside the portrait frame to
  indicate that the portrait is currently loading.
- Event \`click\`: Fires when a clickable portrait is clicked. It provides the
  value of the portrait in its \`details\` object. You can listen to this event
  by using the \`on:click\` syntax.`,

	'7a': `\
You can look at the other navigation links in the Header component for
inspiration about adding your own link.`,
	'7b': `\
It might be a good idea to check out the other routes to see examples of how to
create a new page which loads some data on mount.
Perhaps the Character creator page would be a good place to start?`,

	t1a: `\
We recommend exposing the \`uid\` param as a prop to the component instead of
using SvelteKit's fetch in the \`load\` function, and using methods you know in
your ""normal"" \`script\` tag to get the character from the API.`,

	t2a: `\
This is a wiiidely scoped quest. Try to do a little at a time, iterating with
more advanced functionality as you go along. A good start is just making the
logic for picking two characters, either by user interaction or by randomness.`,
	t2b: `\
To simulate a series of attacks you can use a \`setInterval\` which will trigger
some function at set intervals. Combining that with other variables to determine
who gets to attack, what effect the attack has, and checks for when the battle
is over can be a way to implement this.`,
};

const args = process.argv.slice(2);

const hintArg = args[0]?.toLowerCase();

const isValidQuest =
	(hintArg?.length === 2 &&
		(hintArg?.startsWith('1') ||
			hintArg?.startsWith('2') ||
			hintArg?.startsWith('3') ||
			hintArg?.startsWith('4') ||
			hintArg?.startsWith('5') ||
			hintArg?.startsWith('6') ||
			hintArg?.startsWith('7'))) ||
	(hintArg?.length === 3 && (hintArg?.startsWith('t1') || hintArg?.startsWith('t2')));

if (hintArg === undefined) {
	console.error('ERROR: Hint id must be specified. Example `npm run hint 1a`.');
} else if (!isValidQuest) {
	console.log(`ERROR: Invalid quest. Example \`npm run hint 1a\`.`);
} else if (!hints[hintArg]) {
	console.error(
		`ERROR: There are no more hints for this quest, try looking another hint or ask for help 😊`,
	);
} else {
	const output = cowsay.say({ text: hints[hintArg] });
	console.log(output);
}
