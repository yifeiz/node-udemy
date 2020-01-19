const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    console.log("No data");
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes:"));
  notes.forEach(note => {
    console.log(note.title);
  });
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Duplicate note exists!!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const remainingNotes = notes.filter(note => !(note.title === title));
  let msg;
  if (remainingNotes.length === notes.length) {
    msg = chalk.red.inverse("Error! No note of that file name");
  } else {
    msg = chalk.green.inverse("'" + title + "'" + " has been removed.");
    saveNotes(remainingNotes);
  }
  console.log(msg);
};

const readNote = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);
  if (!noteToRead) {
    console.log(chalk.red.inverse("Error! No note of that file name"));
  } else {
    console.log(chalk.inverse(title));
    console.log(noteToRead.body);
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
