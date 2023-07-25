"use strict";

const numbers = [[1, 2], [1, 2], [1, 2], [1, 2], 8];

const uniqueNumbers = new Set(numbers);

// console.log("numbers: ", numbers);
// console.log("uniqueNumbers: ", uniqueNumbers);

// uniqueNumbers.add(0);
// uniqueNumbers.add(0);

// console.log("uniqueNumbers: ", uniqueNumbers);

// console.log(uniqueNumbers.size);
// console.log(uniqueNumbers.has(9));
// uniqueNumbers.delete(4);

// console.log("uniqueNumbers: ", uniqueNumbers);

// uniqueNumbers.clear();

// console.log("uniqueNumbers: ", uniqueNumbers);

// for (let num of uniqueNumbers) {
//   console.log(num);
// }

// uniqueNumbers.forEach((num, numAgain, set) => {
//   console.log(num, numAgain, set);
// });

// const arrCollection = [];
// const setCollection = new Set();

// function updateCollection(arr, set, value) {
//   arr.push(value);
//   set.add(value);
// }

// updateCollection(arrCollection, setCollection, 1);
// updateCollection(arrCollection, setCollection, "some text...");
// updateCollection(arrCollection, setCollection, true);
// updateCollection(arrCollection, setCollection, 1);

// console.log(arrCollection);
// console.log(setCollection);

// const user = { name: "Dmytro" };
// const user2 = { name: "Dmytro" };
// const user3 = { name: "Dmytro" };

// console.log(user === user2);

// const users = new Set();
// users.add(user);
// users.add(user2);
// users.add(user2);

// console.log(users);

// const uniqueNumbers2 = [...new Set(numbers)];
// console.log(uniqueNumbers);

const fruits = new Map([
  ["orange", 100],
  ["orange", 100],
  ["apple", 50],
  ["pineapple", 200],
]);

console.log(fruits);

// console.log(fruits.size);
// console.log(fruits.get("pineapple"));
// fruits.set("banana", 120);
// console.log(fruits);
// fruits.clear();

// for (let fruit of fruits.keys()) {
//   console.log(fruit);
// }

// for (let value of fruits.values()) {
//   console.log(value);
// }

// for (let value of fruits.entries()) {
//   console.log(value);
// }

// for (let value of fruits) {
//   console.log(value);
// }

// fruits.forEach((fruit, key, map) => {
//   console.log(key);
//   console.log(fruit);
//   console.log(map);
// });

// new WeakSet[{}, {}, {}];
// new WeakMap[
//     [{}, {}],
//     [{}, {}],
//     [{}, {}],
//     [{}, {}],
//     [{}, {}],
// ];
