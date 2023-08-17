"use strict";

// оголошуємо змінні з якими будемо працювати
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const filterInput = document.querySelector(".filter-input");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// слухачі подій
// запускаємо функцію showTasks коли весь HTML загружений
document.addEventListener("DOMContentLoaded", showTasks);
// запускаємо функцію addTask коли відправляємо форму (клікаємо на кнопку "Додати завдання")
form.addEventListener("submit", addTask);
// запускаємо функцію deleteTask коли клік попадає на список <ul>
taskList.addEventListener("click", deleteTask);
// запускаємо функцію після кліку на кнопку "Видалити всі елементи"
clearBtn.addEventListener("click", deleteAllTasks);
// запускаємо функцію filterTasks після того як ввідпускаємо клавішу (тоді, коли фокус в інпуті "Пошук завдань")
filterInput.addEventListener("keyup", filterTasks);

function showTasks() {
  // перевіряємо чи є у localStorage вже якісь завдання
  if (localStorage.getItem("tasks")) {
    // якщо вони там є - витягуємо їх і присвоюємо змінній
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    // для кожної задачі яка є
    tasks.forEach((task) => {
      // створюємо елемент списку
      const li = document.createElement("li");
      // всередині цього елементу списку додаємо опис завдання
      li.innerHTML = task;

      // сторюємо кнопку для видалення
      const button = document.createElement("button");
      // всередину кнопку додаємо значення х
      button.innerHTML = "x";
      // додаємо їй клас
      button.classList.add("btn-delete");
      // записуємо кнопку після всього, що є всередині елементу списку
      li.append(button);

      // записуємо цей елемент в кінець списку
      taskList.append(li);
    });
  }
}

// створюємо таску
function addTask(event) {
  // зупиняємо поведінку браузера за замовчуванням
  event.preventDefault();

  // отримуємо значення з інпута через форму
  const value = event.target.task.value;

  // повторюємо всі дії з функції showTasks
  const li = document.createElement("li");
  li.innerHTML = value;

  const button = document.createElement("button");
  button.classList.add("btn-delete");
  button.innerHTML = "x";

  li.append(button);
  taskList.append(li);

  // але тут ще записуємо задачу в локал сторедж
  storeTaskInLocalStorage(value);
  // і чистимо інпут
  taskInput.value = "";
}

function storeTaskInLocalStorage(task) {
  // оголошуємо змінну яка буде використовуватись для списку завдань
  let tasks;

  // перевіряємо чи є у localStorage вже якісь завдання
  if (localStorage.getItem("tasks") !== null) {
    // якщо вони там є - витягуємо їх і присвоюємо змінній
    tasks = JSON.parse(localStorage.getItem("tasks"));
  } else {
    // якщо їх там нема - присвоюємо змінній значення порожнього масиву
    tasks = [];
  }

  // додаємо до списку нове завдання
  tasks.push(task);

  // зберігаємо список завданнь в Local Storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// видалити якусь конкретну таску
function deleteTask(event) {
  // якщо ми клікнули по хрестику  - тоді
  if (event.target.classList.contains("btn-delete")) {
    // пересвідчуємось чи юзер справді хоче видалити цей елемент
    if (confirm("Ви впевнені що хочете видалити цю задачу?")) {
      // видаляємо цей елемент списку, в якому знаходиться хрестик
      event.target.closest("li").remove();
      // викликаємо функцію яка буде видаляти завдання з Local Storage
      removeTaskFromLocalStorage(
        event.target.closest("li").firstChild.textContent
      );
    }
  }
}

function removeTaskFromLocalStorage(taskContent) {
  // перевіряємо чи є у localStorage вже якісь завдання
  if (localStorage.getItem("tasks")) {
    // якщо вони там є - витягуємо їх і присвоюємо змінній
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    // фільтруємо таски і повертаємо ті, які проходять умову
    const filteredTasks = tasks.filter((task) => task !== taskContent);

    // запусиємо нові задачі в Local Storage
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }
}

// видалити всі таски
function deleteAllTasks() {
  if (confirm("Ви впевнені що хочете видалити всі задачі?")) {
    // видаляємо весь контент всередині списку
    taskList.innerHTML = "";
    // видалити всі елементи з Local Storage
    removeAllTasksFromLocalStorage();
  }
}

function removeAllTasksFromLocalStorage() {
  // чистимо Local Storage
  localStorage.clear();
  //   localStorage.removeItem("tasks");
}

function filterTasks(event) {
  // отримуємо всі елементи списку
  const tasks = taskList.querySelectorAll("li");
  // отримуємо значення інпуту "Пошук завдань" і робимо його в нижньому регістрі
  const searchQuery = event.target.value.toLowerCase();

  // проходимось по кожному елементу завдань
  tasks.forEach((task) => {
    // отримуємо текст завдання
    const taskValue = task.firstChild.textContent.toLowerCase();

    // перевіряємо чи текст завдання має в собі значення інпута "Пошук завдань"
    if (taskValue.includes(searchQuery)) {
      // якщо має, то display = list-item
      task.style.display = "list-item";
    } else {
      // якщо ні - ховаємо це елемент списку
      task.style.display = "none";
    }
  });
}
