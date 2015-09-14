/*
The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string),
  and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title
  and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you
  read it yet or not. If you read it, log a string like
  'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
  like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

// write your solution here...
var books = [
   hobbit = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: false
  },
  farewell = {
    title: "A Farewell to Arms",
    author: "Ernest Hemingway",
    alreadyRead: true
  },
  kite = {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    alreadyRead: true
  }
];

var list = function(books) {
      for(var i = 0; i < books.length; i++) {
        var obj = books[i];
          if (obj['alreadyRead'] === true) {
            console.log("You already read " + obj['title'] + " by " + obj['author'] + ".");
          } else console.log("You still need to read " + obj['title'] + " by " + obj['author'] + ".");
    }
  };

list(books);
