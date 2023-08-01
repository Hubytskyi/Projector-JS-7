// "use strict";

// function sayHi() {
//   console.log("Hello!");
// }

// const timerId = setTimeout(sayHi, 2000);

// clearTimeout(timerId);

// console.log(timerId);

// const timerId = setTimeout(sayHi, 1000);
// const timerId2 = setTimeout(sayHi, 1000);

// clearTimeout(timerId);

// console.log(timerId);
// console.log(timerId2);

// setTimeout(() => {
//   clearInterval(timerId);
// }, 3500);

// console.log(timerId);

// function sayHi() {
//   alert("Hi!");

//   setTimeout(sayHi, 2000);
// }

// sayHi();

// function getFullName() {
//   //   console.log(this);
//   console.log(`${this.firstName} ${this.lastName}`);
// }

// const person1 = {
//   id: "4242",
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: getFullName,
// };

// const person2 = {
//   id: "4242",
//   firstName: "John",
//   lastName: "Doe",
//   getFullName,
//   roles: ["admin", "user"],
//   // good with context
//   showRoles() {
//     this.roles.map((role) => {
//       console.log(`${this.firstName} - ${role}`);
//     });
//   },
//   showRoles: function () {
//     this.roles.map((role) => {
//       console.log(`${this.firstName} - ${role}`);
//     });
//   },

//   // bad with context
//   showRoles: () => {
//     this.roles.map((role) => {
//       console.log(`${this.firstName} - ${role}`);
//     });
//   },
// };

// person2.showRoles();
// getFullName();

// const person2 = {
//   id: "4242",
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
//   roles: ["admin", "user"],
// };

// const getFullName = person2.getFullName.bind(person2);
// getFullName();

// setTimeout(person2.getFullName.bind(person2), 2000);

// setTimeout(() => {
//   person2.getFullName();
// }, 2000);

// setTimeout(person2.getFullName, 2000);

// setTimeout(person2.getFullName.bind(), 2000);

// person2.getFullName = function () {
//   console.log("we changed context");
// };

const person2 = {
  id: "4242",
  firstName: "John",
  lastName: "Doe",
  getFullName: function (...args) {
    console.log(`${this.firstName} ${this.lastName}, ${args}`);
  },
  roles: ["admin", "user"],
};

// person2.getFullName.call(person2, false, 123); // кількість аргументів
person2.getFullName.apply(person2, [123, true]); // один масив

// bind - не викликає функцію відразу і приймає окремі аргументи
// call - викликає функцію відразу і приймає окремі аргументи
// apply - викликає функцію відразу і приймає масив як аргумент
