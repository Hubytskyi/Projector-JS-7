"use strict";

// const user = {
//   name: "John",
//   age: 42,
// };

// localStorage.setItem("user", user);
// console.log(localStorage.getItem("user"));

// const roles = ["admin", "user"];
// localStorage.setItem("roles", roles);
// console.log(localStorage.getItem("roles"));

// const section = document.querySelector(".section");
// console.log(section);

// const section2 = document.querySelectorAll("#section");
// console.log(section2);

// const title = document.querySelector(".title");
// console.log(title.closest(".title"));

// const title2 = document.getElementById("#title");
// console.log(title2);
// console.log(title.nextElementSibling);

// ==============

// const title = document.querySelector("#main-title");
// console.log(title.hasAttribute("class"));
// console.log(title.getAttribute("id"));

// const section = document.querySelector(".section-one");
// section.setAttribute("id", "section");

// title.removeAttribute("class");
// console.log([...title.attributes]);

// const itemList = document.querySelectorAll(".item");
// itemList.forEach((element) => console.log(element.dataset));
// const itemList = document.querySelector("[data-sku='101']");
// const itemList2 = document.querySelectorAll("[data-sku]");
// console.log(itemList);

// ==============

// const title = document.querySelector("#main-title");
// console.log(document.nodeType);

// console.log(title.firstChild.nodeName);
// title.textContent = "Some Title";
// console.log(title);

// const button = document.querySelector(".button");
// console.log(button);

// button.addEventListener("click", (event) => {
//   event.stopPropagation();

//   console.log("click on button");
// });

// const section = document.querySelector(".section-one");
// console.log(section);

// section.addEventListener("click", () => {
//   console.log("click on section");
// });

const card = document.querySelector(".card");
const button = document.querySelector(".add-to-cart");
// console.log(card);

// card.addEventListener(
//   "click",
//   (event) => {
//     //   event.preventDefault();
//     //   event.stopPropagation();

//     console.log("make some redirect");
//   },
//   true
// );

const input = document.querySelector("input");

button.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    //   event.stopPropagation();
    //
    console.log(event);
  },
  true
);

input.addEventListener("focus", (event) => {
  console.log(event);
});

input.addEventListener("blur", (event) => {
  console.log(event);
});
