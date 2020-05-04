const program = require('commander');
const { getBooks, getTitles} = require ('./fetch');
const { addBook, getReadingList } = require ('./commands');
const { prompt } = require('inquirer');

const questions = [
      {
        type: "input", 
        name: "booksearch",
        message: "Welcome! Enter A Book or Author You are Looking For!"
        
      }
    //   {
    //       type: "list",
    //       name: "pickBook",
    //       message: "Choose A Book",
    //       choices: ["BookTitles", "BookTitles2"] 
    //   }
];

program
.version('1.0.0')
.description('Reading List Application')

// program
// .command("newBook <search>")
// .alias('nB')
// .description('See the top 5 results from the Google API for the requested search')
// .action(search => getBooks(search));


program
.command("newBook")
.alias('nB')
.description('See the top 5 results from the Google API for the requested search')
.action(() => {
    prompt(questions).then(answer => getTitles(answer));
    
});

program 
.command("chooseBook <chooseTitle>")
.alias("cB")
.description("Choose a Book from List")
.action(bookTitles => getTitles(bookTitles))

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