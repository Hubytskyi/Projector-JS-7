"use strict";

// console.log(!!!0);
// console.log(Boolean(0));

// console.log(!![]);
// console.log(!!{});

// console.log("" || 42 || true);
// console.log(0 && true && [] && {});

// console.log(101 && true && [] && {});

// const text = "text";
// console.log(text.charAt(2));

// const text2 = "My mama said I had a devil to scratch my soul";
// console.log(text2.includes("evil"));

// const array = [1, 4, 6, 7]; // sfsd34r23d22eds4f34f3
// const popResult = array.pop();

// console.log(array); // 1 4 6
// console.log(popResult); // 7

// const array2 = [1, 4, 6, 7]; // sfsd34r23d2242342eds4f34f3
// console.log(array === array2);

// for (let i = 0; i < array.length; i++) {
//     let isEquale = true;

//     if (array[i] !== array2[i]) {
//         isEquale = false;
//         return;
//     }

//     isEquale;
// }

// console.log(typeof null === typeof []);

// Array.isArray([]) && obj !== null && typeof obj === 'object'

// console.log(new Set([1, 2, "2", 3, "4", {}, {}, null, null, [], []]).size);
// console.log(new Set([1, 2, "2", 3, "4", {}, {}, null, null, [], []]));

// 7 7 9 1 8 7 8

// console.log(
//   new Map([
//     ["1", "some str"],
//     [1, {}],
//     [1, {}], //
//     [2, []],
//     ["1", []], //
//     [true, "true"],
//     [!!1, "true"], //
//   ])
// );

// 5 4 6
// function sum(a, b, c = 0) {
//   const arr = [];
//   console.log(a, b, c);
//   arguments arr.push()
//   console.log(arguments);
// }

// console.log(sum(1, 2, 3, 4, 5));

// sum(1, 2);

// const arr = [2, 4, 6];

// console.log(...arr);

// console.log(Math.max(arr));

// function sum(a, b, c, d, e, f) {
//   return a + b + c + d + e + f;
// }

// console.log(sum(...arr, ...arr));

// const a = "global";

// {
//   record: {
//     a: "global";
//   }
//   outer: null;
// }

// function outer() {
//   {
//     record: {
//       b: "outer";
//       inner: "func link inner";
//     }
//     outer: global;
//   }

//   const b = "outer";
//   function inner() {
//     {
//       record: {
//         c: "inner";
//       }
//       outer: "func link outer";
//     }

//     const c = "inner";
//     console.log(c);
//     console.log(b);
//     console.log(a);
//   }
//   console.log(a);
//   console.log(b);
//   inner();
// }

// outer();
// console.log(a);
// 95 96 91 92 93 101

// const name = "Соломія";

// function getPersonName() {
//   const name = "Альона";

//   return function () {
//     console.log(name);
//   };
// }

// const person = getPersonName();
// const person1 = getPersonName();
// const person2 = getPersonName();
// person();
// person1();
// person2();

// function getCount() {
//   let counter = 0;

//   return function () {
//     return counter++;
//   };
// }

// const count = getCount();
// const count2 = getCount();
// // const count = function () {
//     // return counter++;
// // };

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count2());
// console.log(count2());
// console.log(count2());
// let counter = 0;
// function getCount() {
//   return counter++;
// }

// console.log(getCount());
// console.log(getCount());
// console.log(getCount());

// console.log(window);
// console.log(globalThis);

// const a1 = "1";
// let a2 = "2";
// // var a3 = "3";

// function a4() {
//   return 4;
// }
// console.log(window);
