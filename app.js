"use strict";

const form = document.querySelector("form");
const input = document.querySelector("input");
const cities = document.querySelector(".cities");
const errMsg = document.querySelector(".msg");

const apiKey = "1149bcae540222f9853352ccae3a8df6";
const apiKey2 = process.env.WEATHER_API_KEY;
const findedCities = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value.trim() === "") {
    input.focus();
    return null;
  }

  if (findedCities.includes(input.value.toLowerCase())) {
    errMsg.innerHTML = `You already know the weather for ${input.value}`;
    form.reset();
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.cod === 200) {
        const { main, sys, weather, name } = data;

        // const system = data.sys;

        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        const li = document.createElement("li");
        li.classList.add("city");

        const markup = `
          <h2 class="city-name">
            <span>${name}</span>
            <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}</div>
          <figure>
            <img class="city-icon" src="${icon}" alt="${
          weather[0]["description"]
        }"/>
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;

        li.innerHTML = markup;
        cities.appendChild(li);
        findedCities.push(input.value.toLowerCase());
        errMsg.innerHTML = "";
      } else {
        throw new Error(data.message);
      }
    })
    // Error(data.message)
    .catch((err) => {
      errMsg.innerHTML = err.message;
    })
    .finally(() => {
      form.reset();
      input.focus();
    });
});
