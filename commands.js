const fetch = require('node-fetch')

const getBooks = async(search) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    const data = await response.json();
    //     console.log(data)
      
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
      
      console.log(newBook1,newBook2,newBook3,newBook4,newBook5)
}


const addBook = (book) => {
  Book.create(book).then(book => {
      console.info("New Book Added");
  });
}

    
    
    module.exports = {
        getBooks
    }