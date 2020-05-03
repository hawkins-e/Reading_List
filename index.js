// const mongoose = require ('mongoose');

// mongoose.Promise = global.Promise;

// const db = mongoose.connect('mongodb://localhost:27017/booklistcli', {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true  
// });

// const Book = require('./models/book');
// // const URL = 'https://www.googleapis.com/books/v1/volumes?q={search terms}'




// const listBooks = (title) => {
//     Book.find()
//     .then(books => {
//         console.info(books);
//         console.info(`${books.length} books`);
//         client.close();
//     });
// }


// module.exports = {
//     addBook
// }

const program = require('commander');
const { getBooks } = require ('./fetch')

program
    .version('1.0.0')
    .description('Reading List Application')

program
    .command("newBook <search>")
    .alias('nB')
    .description('see the top 5 results from the Google API for the requested search')
    .action(search => getBooks(search));

program.parse(process.argv);