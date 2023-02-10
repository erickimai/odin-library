/* eslint-disable max-classes-per-file */
const tbody = document.querySelector("tbody");

class Book {
  constructor(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

class DisplayBook {
  static parseDom(book) {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.innerText = `${book.title}`;
    const author = document.createElement("td");
    author.innerText = `${book.author}`;
    const pages = document.createElement("td");
    pages.innerText = `${book.pages}`;
    const year = document.createElement("td");
    year.innerText = `${book.year}`;
    const read = document.createElement("td");
    const select = document.createElement("select");
    read.append(select);
    const yes = document.createElement("option");
    yes.innerText = "Yes";
    select.append(yes);
    const notYet = document.createElement("option");
    notYet.innerText = "Not Yet";
    select.append(notYet);
    const remove = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerText = "Delete";
    removeButton.addEventListener("click", (e) => {
      e.currentTarget.parentNode.parentNode.remove();
    });
    row.append(name);
    row.append(author);
    row.append(pages);
    row.append(year);
    row.append(read);
    row.append(remove);
    remove.append(removeButton);
    tbody.append(row);
  }
}

class CreateForm {
  static queryForm() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const book = new Book(
        form.elements.btitle.value,
        form.elements.bauthor.value,
        form.elements.bpages.value,
        form.elements.byear.value
      );
      DisplayBook.parseDom(book);
      form.elements.btitle.value = "";
      form.elements.bauthor.value = "";
      form.elements.bpages.value = "";
      form.elements.byear.value = "";
    });
  }

  static openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  static closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
}

CreateForm.queryForm();
