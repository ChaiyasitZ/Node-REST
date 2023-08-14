// description: CRUD operations for books without a database
// npm install express
// Run this file using node CRUDBookNoDB.js
// Test with Postman
require("dotenv").config(); // Load .env file
const express = require("express"); // Import express
const app = express(); // Make express app

// parse requests of content-type - application/json
app.use(express.json());

// sample data
let books = [
    {
        id: 1,
        title: "Book 1",
        author: "Author 1",
    },
    {
        id: 2,
        title: "Book 2",
        author: "Author 2",
    },
    {
        id: 3,
        title: "Book 3",
        author: "Author 3",
    }
]

// route to get all books
app.get("/books", (req, res) => {
    res.json(books);
});

// route to get book by id
app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id == id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send({ message: "Book not found" });
    }
});

// route to create new book
app.post("/books", (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
});

// route to update book by id
app.put("/books/:id", (req, res) => {
    const book = books.find(b => b.id === prase.int(req.params.id));
    if (!book) res.status(404).send({ message: "Book not found" });
    book.title = req.body.title;
    book.author = req.body.author;
    res.send(book);
});

// route to delete book by id
app.delete("/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send({ message: "Book not found" });
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(book);
});

// Make server listen on some port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}...`));

// Test with Postman
// GET http://localhost:3000/books