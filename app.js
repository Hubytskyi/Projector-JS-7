"use strict";

// function delay() {
//   let sum = 0;

//   for (let i = 0; i < 1000000000; i++) {
//     sum += i;
//   }

//   console.log(sum);
//   return sum;
// }

// setTimeout(delay, 5000);
// console.log(1);
// console.log(2);

// function outer() {
//   function inner() {
//     console.log("inner");
//   }
//   inner();
// }

// outer();

// пустий
// outer
// outer, inner
// outer, inner, console.log
// outer, inner
// outer
// пустий

// const button = document.querySelector("button");
// button.addEventListener("click", () => console.log("click"));
// https://jsonplaceholder.typicode.com/

const user = {
  name: "mykola",
  email: "hubytskyi@gmail.com",
  password: "1234",
};

const serverApiUrl = "http://servername.com";

async function register() {
  const userRes = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const parsedUserRes = await userRes.json();
  const userTodos = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${parsedUserRes.id}`
  );
  const parsedUserTodos = await userTodos.json();
}

// function register() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => console.log(json));
// }

register();
