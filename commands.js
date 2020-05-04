const mongoose = require('mongoose')
const assert = require('assert')
mongoose.Promise = global.Promise;


const mg = mongoose.connect('mongodb://localhost:27017/book_list', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const Book = require('./models/book');

//Add Book 
const addBook = (book) => {
    Book.create(book).then(book => {
        console.info("New Book added");
        mongoose.disconnect();
    })
}

// Reading List 
const getReadingList = () => {
    Book.find()
    .then(books => {
        console.info(books);
    mongoose.disconnect();
    });
}

module.exports = {
    addBook,
    getReadingList
}