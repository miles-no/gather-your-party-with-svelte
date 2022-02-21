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

	'6a': 'The first promise for fetching all the portrait IDs is already being fired when the component mounts and can be used directly in the await block: `{#await getPortraitsPromise}`.',
	'6b': 'The nested promise for fetching each portrait can be fired inline in the await block, no extra code in the script tag is needed. Can be called inline like this: `{#await apiFetch("your URL")}`.',
	'6c': `\
The \`PortraitPreview\` component takes three different props and dispatches one event:
- Prop \`value\`: The value of a portrait that it should show.
- Prop \`clickable\`: Boolean prop that makes the preview style itself to indicate it can be clicked.
- Prop \`isLoading\`: Shows a loading indicator inside the portrait frame to indicate that the portrait is currently loading.
- Event \`click\`: Fires when a clickable portrait is clicked. It provides the value of the portrait in its \`details\` object. You can listen to this event by using the \`on:click\` syntax.\
`,
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
