// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "install",
  },
  {
    type: "input",
    message: "Please provide the usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "How can users contribute to your project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Please add any testing procedures here.",
    name: "testing",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHubName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: ["MIT", "GNU GPLv3", "ISC", "BSD 3-Clause"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // var dataHere = generateMarkdown(data)
  fs.writeToFile(fileName, dataHere);
}

// TODO: Create a function to initialize app
function init() {
  // inquirer.prompt(questions) = using questions we define on 4
  // .then(response) =>
  // writeToFile("readMe.md", response)
}

// Function call to initialize app
init();
