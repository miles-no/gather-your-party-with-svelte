import * as cowsay from 'cowsay';

const hints = {
    '1a': 'Hint number 1 will help you!',
    '2a': 'Hint number 2 will not help you so much, but it is longer and a lot cooler 🆒\nIt also includes line breaks which are\nReally\ncool\nHere is a link\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ',
}

const args = process.argv.slice(2);

const hintArg = args[0];

if (hintArg === undefined) {
    console.error('ERROR: Hint id must be specified. Example `npm run hint 1a`.');
} else if (!hints[hintArg]) {
    console.error(`ERROR: Could not find hint ${hintArg}. Example \`npm run hint 1a\`.`);
} else {
    const output = cowsay.say({text: hints[hintArg]});
    console.log(output);
}
