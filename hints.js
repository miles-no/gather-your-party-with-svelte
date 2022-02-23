import * as cowsay from 'cowsay';

const hints = {
	'1a': 'Hint number 1 will help you!',
	'2a': `\
Hint number 2 will not help you so much, but it is longer and a lot cooler 🆒
It also includes line breaks which are
Really
cool
Here is a link
https://www.youtube.com/watch?v=dQw4w9WgXcQ\
`,

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

const hintArg = args[0];

if (hintArg === undefined) {
	console.error('ERROR: Hint id must be specified. Example `npm run hint 1a`.');
} else if (!hints[hintArg]) {
	console.error(`ERROR: Could not find hint ${hintArg}. Example \`npm run hint 1a\`.`);
} else {
	const output = cowsay.say({ text: hints[hintArg] });
	console.log(output);
}
