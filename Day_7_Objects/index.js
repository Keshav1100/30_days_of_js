// Activity - 1: Object creation and Access
// Task - 1:
let book = {
  title: "Harry Potter and the Philospoher's Stone",
  author: "J.K. Rowling",
  year: 1998,
};
console.log(book);
// Task - 2:
console.log(book["title"]);
console.log(book["author"]);

// Activity - 2: Object Methods:
// Task - 3:
book.info = () => {
  return `Title: ${book.title}\nAuthor: ${book.author}`;
};
console.log(book.info());

// Task - 4:
book.updateYear = (year) => {
  book.year = year;
  return book;
};

console.log(book.updateYear(1999));

// Activity - 3: Nested Objects
// Task - 5:
const library = {
  name: "BookZone",
  books: [book],
};

console.log(library);
// Task - 6:
console.log(library["name"]);
console.log(library["books"]);

// Activity - 4: The this Keyword
// Task - 7:
book.newInfo = function () {
  return `Title: ${this.title}\nAuthor: ${this.author}`;
};

console.log(book.newInfo());

// Activity - 5: Object Iteration
// Task - 8:
for (const prop in book) {
  console.log(prop, ": ", book[prop]);
}

// Task - 9:
Object.keys(book).map((key) => console.log(key));
Object.values(book).map((key) => console.log(key));
