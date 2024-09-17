#!/usr/bin/env node

/**
 * This program displays a message asking the user for its name,
 * then read the user input and display it back.
 */
const displayMessage = require('./0-console');

displayMessage('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const text = process.stdin.read();

  if (text !== null) {
    process.stdout.write(`Your name is: ${text}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
