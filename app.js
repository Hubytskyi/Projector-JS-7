"use strict";

// async function getStarWarsMovie(id) {
//   console.log("start fetching...");
//   const response = await fetch(`https://swapi.dev/api/films/${id}/`);
//   console.log("отримали відповідь від ендпоїнту - ", response);
//   return response.json();
// }

// const movies = getStarWarsMovie(1).then((movie) => {
//   console.log(movie);
// });

// console.log("результат - ", movies);

// function getMainActorProfileFromMovie(id) {
//   return fetch(`https://swapi.dev/api/films/${id}/`)
//     .then((movieResponse) => {
//       return movieResponse.json();
//     })
//     .then((movie) => {
//       const characterUrl = movie.characters[0].split("//")[1];
//       return fetch(`https://${characterUrl}`);
//     })
//     .then((characterResponse) => {
//       return characterResponse.json();
//     })
//     .catch((err) => {
//       console.error("Помилка - ", err);
//     });
// }

// getMainActorProfileFromMovie(1).then((profile) => {
//   console.log(profile);
// });

// async function getMainActorProfileFromMovie(id) {
//   try {
//     const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
//     const movie = await movieResponse.json();

//     const characterUrl = movie.characters[0].split("//")[1];
//     const characterResponse = await fetch(`https://${characterUrl}`);
//     return characterResponse.json();
//   } catch (err) {
//     console.error("Помилка - ", err);
//   } finally {
//     console.log("done!");
//   }
// }

// getMainActorProfileFromMovie(1).then((profile) => {
//   console.log(profile);
// });

// async function getMainActorProfileFromMovie(id) {
//   return 1;
// }

// await getMainActorProfileFromMovie(1);

// const error = new Error("Movie not found");
// console.log(error.name);

// console.log(;) // SyntaxError: Unexpected token ';'

// console.log(result); // ReferenceError: result is not defined

// console.log(null.length); // TypeError: Cannot read properties of null

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (response.ok) {
    return response.json();
  }

  return [];
}

async function showUsers() {
  const users = await getUsers();
  renderUsers(users);
}

function renderUsers(users) {
  const list = document.querySelector("ul");

  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = user.name;

    list.append(li);
  });
}

showUsers();
