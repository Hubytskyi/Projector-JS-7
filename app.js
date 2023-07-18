"use sctrict";

const id = Symbol("id");
const id2 = Symbol("id");

// console.log(id2 === id);

const user = {
  [id]: 42,
  name: "Dima",
  id: 123,
  age: 25,
  stack: ["JS", "HTML", "CSS"],
  sayHello: function () {
    console.log("Hello!");
  },
  size: {
    height: 180,
    weight: 80,
  },
  "has pets": true,
  address: {
    street: {
      someKey: "asdasda",
    },
  },
};

// user[id] = 123;
user.isOnline = true;
user.age = 30;

const admin = Object.assign({}, user);
user.age = 42;
user.size.height = 200;

// console.log(admin);

// console.log(user[id]);

// delete user.age;

// console.log("name" in user);
// console.log("isAdmin" in user);

// user = "Oleh";

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// console.log(user.address?.street?.someKey);

// console.log(Object.values(user));
// console.log(Object.keys(user));

// for (let value of Object.values(user)) {
//   console.log(value);
// }

// for (let value of Object.keys(user)) {
//   console.log(value);
// }

// const arrFromObj = Object.entries(user);
// console.log(arrFromObj);

// const filteredArr = arrFromObj.filter((item) => {
//   if (typeof item[1] !== "number") {
//     return item;
//   }
// });

// const arr = [
//   ["age", 30, "somestr"],
//   ["test", 123, "test123"],
// ]; // обріже 2й індекс
// const arr = [["age"], ["test"]]; // value = undefined

// const filteredArr = arrFromObj.filter((item) => typeof item[1] !== "number");

// console.log(Object.fromEntries(arr));

// console.log(typeof null);
// console.log(typeof []);

// if (typeof user === "object" && user !== null && Array.isArray(user)) {

// }

// let someStr = "text";

// someStr = 14;

// const admin = user;
// user.age = 32;

// const admin = {};

// for (let key in user) {
//   admin[key] = user[key];
// }
// const admin = user;
// admin.age = 32;

// console.log(user);

// const admin = Object.assign({}, user, {}, {});

// console.log(admin);

// Object.freeze(user);

// user.age = 42;

// console.log(user);

// const dateNow = new Date();

// const tmsmp = Date.now();

// let number = 0;

// for (let i = 0; i < 100000000; i++) {
//   number += i;
// }

// const tmsmp2 = Date.now();

// console.log(tmsmp - tmsmp2);

// const someDate = new Date();

// const parsedDate = Date.parse(someDate);

// console.log(new Date(parsedDate));
