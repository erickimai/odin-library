const myLibrary = [];
const form = document.querySelector("form");
const bname = document.getElementById("bname");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(bname.value);
  bname.value = "";
});
