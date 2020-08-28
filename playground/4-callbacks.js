const doWorkCallback = callback => {
  setTimeout(() => {
    // callback('This is my error!', undefined)
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});

// const sometest = callback => {
//   setTimeout(() => {
//     callback(undefined, undefined, "something");
//   }, 2000);
// };

// sometest((thing1, thing2, result) => {
//   console.log(thing1, thing2, result);
// });
