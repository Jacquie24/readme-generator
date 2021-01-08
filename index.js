// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [{
    type: 
    message: "What is the name of your project?",
    name: "",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // var dataHere = generateMarkdown(data)
    fs.writeToFile(fileName, dataHere)
}

// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions) = using questions we define on 4
    // .then(response) =>
// writeToFile("readMe.md", response)
}

// Function call to initialize app
init();
