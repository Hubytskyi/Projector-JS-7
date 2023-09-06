"use strict";
// let loading = false;

// const promise = new Promise(function (resolve, reject) {
//   loading = true;
//   console.log("promise start...");

//   console.log("request to server...");
//   const data = [1];

//   if (data.length === 0) {
//     return reject(new Error("something went wrong"));
//   }

//   resolve(data);
// });

// promise
//   .then((res) => res.json())
//   .then((json) => fetch(json.userUrl))
//   .catch((err) => console.log(err))
//   .then((res) => res)
//   .catch((err) => console.log(err))
//   .finally(() => {
//     loading = false;
//   });

// console.log(promise);

// function fetchMovies() {
//   fetch(`https://www.anapioficeandfire.com/api/houses?region=dorne`)
//     .then(function (response) {
//       console.log("response --> ", response);
//       return response.json();
//     })
//     .then(function (houses) {
//       console.log("houses --> ", houses);
//       return fetch(houses[1].overlord);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (overlord) {
//       console.log(overlord.name);
//     })
//     .catch(function (error) {
//       console.log(`Щось пішло не так: ${error.message}`);
//     });
// }

// fetchMovies();

function fetchUsers() {
  return new Promise(function (resolve, reject) {
    fetch(
      `https://jsonplaceholder.typicode.com/userds?token=${process.env.SECRET_KEY}`
    ).then((res) => {
      console.log(res);
      if (res.ok) {
        return resolve(res.json());
      }

      reject(res);
    });
    // console.log(res);
  });
}

function renderUsers(users) {
  const list = document.querySelector(".ul");
  // list
  // users
}

fetchUsers()
  .then((users) => renderUsers(users))
  .catch((err) => console.error(err.message));
