const program = require('commander');
const { addBook, getReadingList } = require ('./commands');
const { prompt } = require('inquirer');


const fetch = require('node-fetch')
const bookArray = []
const bookTitles = []


var questions = [
      {
        type: "input", 
        name: "booksearch",
        message: "Welcome! Enter A Book or Author You are Looking For!"
      },

]  

var questions2 =[

    {
        type: "list",
        name: "pickBook",
        message: "Choose A Book to Add To Your Reading List",
        choices: [ "Title 1", "Title 2", "Title 3","Title 4", "Title 5"] 
    }

]

const getBooks = async(search) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    const data = await response.json();
     console.log(search)

      const newBook1 = {
      title: data.items[0].volumeInfo.title,
      author: data.items[0].volumeInfo.authors[0],
      publisher: data.items[0].volumeInfo.publisher
      } 
        
      const newBook2 = {
      title: data.items[1].volumeInfo.title,
      author: data.items[1].volumeInfo.authors[0],
      publisher: data.items[1].volumeInfo.publisher
      }
      
      const newBook3 = {
      title: data.items[2].volumeInfo.title,
      author: data.items[2].volumeInfo.authors[0],
      publisher: data.items[2].volumeInfo.publisher
      } 
      
      const newBook4 = {
      title: data.items[3].volumeInfo.title,
      author: data.items[3].volumeInfo.authors[0],
      publisher: data.items[3].volumeInfo.publisher
      }
      
      const newBook5 = {
      title: data.items[4].volumeInfo.title,
      author: data.items[4].volumeInfo.authors[0],
      publisher: data.items[4].volumeInfo.publisher
      } 
    
      console.log(newBook1,newBook2,newBook3,newBook4, newBook5)


      bookArray.push(newBook1,newBook2,newBook3,newBook4, newBook5)

      for(var i=0; i<bookArray.length; i++){
        bookTitles.push(bookArray[i].title);
      }

return(bookArray)
// console.log(bookTitles)
}

program
.version('1.0.0')
.description('Reading List Application')

program
.command("newBook")
.alias('nB')
.description('See the top 5 results from the Google API for the requested search')
.action(() => {
    prompt(questions).then((answers) => {
    getBooks(answers.booksearch)
    .then(prompt(questions2)
    .then((answers => console.log(answers))) 

    )})
})

// let newBook = new bookArray({
    //     title: answers.booksearch[0].title,
    //     author: answers.booksearch[0].author,
    //     publisher: answers.booksearch[0].publisher
    // })
    
    // console.log(newBook)

// .action(() => {
//     prompt(questions).then((answers) => {
//     getBooks(answers.booksearch)
//     .then(prompt(questions2)
//     .then((answers => console.log(answers))) 

//     )})
    
program
.command('addBook <title> <author> <publisher>')
.alias('aB')
.description("Adds Book to Database")
.action((title,author,publisher) => {
    addBook({title,author,publisher});
});

program 
.command('getReadingList')
.alias('gRL')
.description('Get Reading List') 
.action(() => getReadingList()) ;

program.parse(process.argv);