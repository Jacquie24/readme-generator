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
    choices: ["MIT", "ISC", "GNU GPLv3", "none"],
  },
];

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    // The generateReadme.md is calling the fileName parameter in the functon above.
    // response is the promise parameter from the .then.
    writeFile("generateReadme.md", response);
  });
}

// Function call to initialize app
init();
