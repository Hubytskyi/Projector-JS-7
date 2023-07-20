"use sctrict";

// 1
const array = [!!0, !!null, !!undefined];

const result1 = array.includes(true);
const result2 = array.includes(false);
// console.log(result1); // ... false
// console.log(result2); // ... true

// 2
const array2 = [!!"", !![], !!false];

const result3 = array2.includes(true);
const result4 = array2.includes(false);
// console.log(result3); // ... true
// console.log(result4); // ... true

// 3
const array3 = [
  55,
  5,
  "text",
  true,
  { a: "1", b: 2, c: 3, d: "e", f: "1" },
  [1, 2, 3, 4, 5],
];

const result5 = array3.some((item) => {
  if (item.length > 4) {
    // console.log(item);
    return item;
  }
});

// console.log(Object.keys({ a: "1", b: 2, c: 3, d: "e", f: "1" }).length);

// console.log(result5); // ...

// 4
const array4 = [1, false, 0, null, { name: "Alina" }, [1, 2, 3, 4, 5]];

const result6 = array4.find((item) => {
  if (typeof item === "object") {
    return true;
  }
});

const result6_1 = array4.find((item) => {
  return typeof item === "object";
});

const result7 = array4.find((item) => typeof item === "object");

// console.log(result6); // ...
// console.log(result7); // ...

// 5
const array5 = [1, false, 0, null, { name: "Alina" }, [1, 2, 3, 4, 5]];

const result8 = array5.filter((item) => item);

// console.log(result8); // ...

// const message = "Hey!";

// function showMessage() {
//   const message = "Hello!";

//   console.log(message);
// }

// // message // Error

// showMessage();

// function showMessage(name = "незнайомець") {
//   console.log(`Привіт, ${name}`);
// }

// showMessage("Аліна");
// showMessage("Діма");
// showMessage();

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(2, 3);

// console.log(result);

function isMoreFive(a, b) {
  const sum = a + b;
  //   if (sum > 5) {
  //     return true; //
  //   }

  //   return false;

  return sum > 5;
}

// console.log(isMoreFive(3, 3));

// function someFunc() {
//   // ...
//   return un;
// }

// function someFunc() {
//   // ...
// }

// console.log(someFunc()); // undefined

// const sum = function (a, b) {
//   return a + b;
// };

// const res = sum(5, 5);
// console.log(sum(5, 5));

// const sum = (a, b) => {
//   return a + b;
// };

// const sum2 = (a, b) => a + b;

// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// };

// const sayHello2 = () => {
//   console.log(`Hello`);
// };

// sayHello2();

// console.log(sum(5, 6));
// console.log(sum2(5, 6));

// (function () {
//   console.log("Some text...");
// })();

// function greeting(userName) {
//   console.log(`Hello ${userName}`);
// }

// function greeting2(name) {
//   localStorage.set("user", name);
// }

// function processUserInput(callback) {
//   const userName = prompt("please enter your name");

//   greeting(userName);
// }

// function processUserInput2(callback) {
//   const userName = prompt("please enter your name");

//   greeting2(userName);
// }

// processUserInput(greeting2);
// processUserInput((userName) => {
//   console.log(`Hello ${userName}`);
// });

// function deepClone(obj) {
//     const newObj = {}
//     if (obj) deepClone(obj)

//     newObj = obj
// }
