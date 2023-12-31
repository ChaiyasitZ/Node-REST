const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(
    'mongodb://admin:XFLatb62984@node51815-chaiaysitz.proen.app.ruk-com.cloud:11556', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

const Book = mongoose.model('Book', {
    id: Number,
    title: String,
    author: String
});

const app = express();

app.use(bodyParser.json());

app.post('/books',async (req, res) => {
    try {
        const book = new Book(req.body);
        book.id = (await Book.countDocuments()) + 1;
        await book.save();
        res.send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findOne({ id: req.params.id });
        res.send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { 
            new: true });
        res.send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.send(book);
    } catch (err) {
        res.status(500).send(err);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));
