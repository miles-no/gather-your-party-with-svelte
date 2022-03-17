import { say } from 'cowsay2';
import { hints } from './static/hints.js';

const args = process.argv.slice(2);

const hintArg = args[0]?.toLowerCase();

const isValidQuest = /^([1-7]\w)|(t[1-2]\w)$/.test(hintArg);

if (hintArg === undefined) {
	console.error('ERROR: Hint id must be specified. Example `npm run hint 1a`.');
} else if (!isValidQuest) {
	console.log(`ERROR: Invalid quest. Example \`npm run hint 1a\`.`);
} else if (!hints[hintArg]) {
	console.error(
		`ERROR: There are no more hints for this quest, try looking at another hint or ask for help 😊`,
	);
} else {
	const output = say(hints[hintArg], { nowrap: true });
	console.log(output);
}
