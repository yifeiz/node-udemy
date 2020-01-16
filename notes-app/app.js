const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is Yifei.");

// Challenge: Append a message to notes.txt
fs.appendFileSync("notes.txt", "\nThis is a cool feature!");
