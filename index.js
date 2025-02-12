// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the description?',
    }
  ]
  .then((answers) => {
    console.log(answers);
  }));

// TODO: Create a function to write README file
fs.writeFile('log.txt', process.argv[2], (err) =>
    err ? console.error(err) : console.log('success'),);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
