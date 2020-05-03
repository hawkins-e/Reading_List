const mongoose = require('mongoose')
const assert = require('assert')
mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/book_list')

const bookSchema = mongoose.Schema({
    title: { type: String },
    author: { type: String },
    publisher: { type: String }
});

const Book = mongoose.model('Book', bookSchema);

const addBook = (book) => {
    Book.create(book, (err) => {
        assert.equal(null, err);
        console.info("New Book added");
        mongoose.disconnect();
    })
}

const getBookList = () => {
    Book.find()
    .exec((err, books) => {
        assert.equal(null, err);
        console.info(books);
        console.info(`${books.length} matches`)
        mongoose.disconnect();
    })
}

module.exports = {
    addBook,
    getBookList
}