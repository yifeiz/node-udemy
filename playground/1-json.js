const fs = require("fs");

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday"
};

// // This is now a string; can't access attributes anymore
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

// fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Yifei Zhang";
data.age = 19;

fs.writeFileSync("1-json.json", JSON.stringify(data));

console.log(dataBuffer);
console.log(dataJSON);
console.log(data);
