const mongoose = require('mongoose')
const assert = require('assert')
mongoose.Promise = global.Promise;


const mg = mongoose.connect('mongodb://localhost:27017/book_list', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const Book = require('./models/book');

let newBook = {};

//Add Book 
const addBook = (newBook) => {
    Book.create(newBook).then(newBook => {
        console.info("New Book Added");
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

// Remove Book
const removeBook = (_id) => {
    Book.deleteOne({ _id })
      .then(book => {
        console.info('Book Removed');
        mongoose.disconnect();
      });
  }

const handleNewBook = (T,bookArray) => {

    if (T === "Title 1") {
        newBook = new Book({
                title: bookArray[0].title,
                author: bookArray[0].author,
                publisher: bookArray[0].publisher
        });
        console.log(newBook)

    } else if (T === "Title 2") {
        newBook = new Book({
            title: bookArray[1].title,
            author:bookArray[1].author,
            publisher:bookArray[1].publisher
        })  
        
        console.log(newBook)
    
    } else if (T === "Title 3") {
        newBook = new Book({
            title:bookArray[2].title,
            author:bookArray[2].author,
            publisher:bookArray[2].publisher
        })
        
        console.log(newBook)

    } else if (T === "Title 4") {
        newBook = new Book({
            title:bookArray[3].title,
            author:bookArray[3].author,
            publisher:bookArray[3].publisher
        })
        
        console.log(newBook)
    }  else if (T === "Title 5") {
        newBook = new Book({
            title:bookArray[4].title,
            author:bookArray[4].author,
            publisher:bookArray[4].publisher
        })
        
        console.log(newBook)
    }  

    addBook(newBook)

}


module.exports = {
    addBook,
    getReadingList,
    handleNewBook,
    removeBook
}