import * as cowsay from 'cowsay';

const hints = [
	'Hint number 1 will help you!',
	'Hint number 2 will not help you so much, but it is longer and a lot cooler 🆒\nIt also includes line breaks which are\nReally\ncool\nHere is a link\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ',
];

const args = process.argv.slice(2);

const hintArg = args[0];
const hintNr = +hintArg;

if (hintArg === undefined) {
	console.error('ERROR: Hint number must be specified. Example `npm run hint 1`.');
} else if (Number.isNaN(hintNr)) {
	console.error('ERROR: Hint number must be a number. Example `npm run hint 1`.');
} else if (hintNr <= 0 || hintNr > hints.length) {
	console.error(
		'ERROR: Invalid hint range, must be between 1 - ' +
			hints.length +
			'. Example `npm run hint 1`.',
	);
} else {
	const output = cowsay.say({ text: hints[hintNr - 1] });
	console.log(output);
}
