// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// data is referring to the inquirer Response, and title is the key from the key:value pair in my questions


function generateMarkdown(data) {
// call the other functions to format the data in a string and return the full string we want to write to the file

  return `# ${data.title}
  

`;
}

module.exports = generateMarkdown;
