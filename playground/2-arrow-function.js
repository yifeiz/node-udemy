// const square = function(x) {
//   return x * x;
// };

const square = x => {
  return x * x;
};

console.log(square(3));

// Arrow function for this case would give you undefined (cannot access the this)
// const event = {
//   name: "Birthday Party",
//   printGuestList: function() {
//     console.log("Guest list for " + this.name);
//   }
// };

// This is functionally the same as above, but uses ES6 syntax
const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Bob", "Chris"],
  printGuestList() {
    console.log("Gest list for " + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};

event.printGuestList();
