"use strict";

const form = document.querySelector(".book-form");
const list = document.querySelector(".book-list");

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor(theme, form) {
    this.count = 0;
    this.form = document.querySelector(`body ${form}`);
  }
  addBook(book) {
    const row = document.createElement("tr");

    row.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td><button class="delete">x</button></td>
          `;

    list.appendChild(row);
  }

  removeBook(target) {
    if (target.classList.contains("delete")) {
      const ui = new UI();

      target.closest("tr").remove();
      ui.showAlert("success", "Ви успішно видалили книгу.");
    }
  }

  clearFields() {
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".isbn").value = "";
  }

  showAlert = function (className, message) {
    const div = document.createElement("div");
    div.className = className;
    div.innerHTML = message;

    form.before(div);
    setTimeout(() => {
      div.remove();
    }, 3000);
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleValue = document.querySelector(".title").value;
  const authorValue = document.querySelector(".author").value;
  const isbnValue = document.querySelector(".isbn").value;

  const ui = new UI("dark");

  if ([titleValue, authorValue, isbnValue].includes("")) {
    ui.showAlert("error", "Будь ласка, заповніть всі поля.");
  } else {
    const book = new Book(titleValue, authorValue, isbnValue);

    ui.addBook(book);
    ui.clearFields();
    ui.showAlert("success", "Ви успішно додали книгу.");
  }
});

list.addEventListener("click", (event) => {
  const ui = new UI();
  ui.removeBook(event.target);
});
