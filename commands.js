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


const handleNewBook = (T,newArray) => {

    console.log(T,newArray);

    // if (T === "Title 1") {
    //     let newBook = new Book({
    //             title: bookArray[0].title,
    //             author: bookArray[0].author,
    //             publisher: bookArray[0].publisher
    //     });
    //     console.log(newBook)

    // } else if (T === "Title 2") {
    //     let newBook = new Book({
    //         title: a.booksearch[1].title,
    //         author: a.booksearch[1].author,
    //         publisher: a.booksearch[1].publisher
    //     })  
    //     console.log(newBook)
    
    // } else if (T === "Title 3") {
    //     let newBook = new Book({
    //         title: a.booksearch[2].title,
    //         author: a.booksearch[2].author,
    //         publisher: a.booksearch[2].publisher
    //     })
        
    //     console.log(newBook)

    // } else if (T === "Title 4") {
    //     let newBook = new Book({
    //         title: a.booksearch[3].title,
    //         author: a.booksearch[3].author,
    //         publisher: a.booksearch[3].publisher
    //     })
        
    //     console.log(newBook)
    // }  else if (T === "Title 4") {
    //     let newBook = new Book({
    //         title: a.booksearch[3].title,
    //         author: a.booksearch[3].author,
    //         publisher: a.booksearch[3].publisher
    //     })
        
    //     console.log(newBook)
}


module.exports = {
    addBook,
    getReadingList,
    handleNewBook
}