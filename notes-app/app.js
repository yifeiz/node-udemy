const validator = require("validator");
const chalk = require("chalk");

const getNotes = require("./notes.js");

const msg = getNotes();
const myString = chalk.red.inverse.bold("Hello world!");

console.log(myString);

console.log(msg);
console.log(validator.isEmail("11@11.com"));
console.log(validator.isURL("googleca"));

// Define and use a function in a new file
