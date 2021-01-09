// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "none") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `### License
  This page uses the [MIT]("https://choosealicense.com/licenses/mit/") license.`;
  } else if (license === "ISC") {
    return `### License
  This page uses the [ISC]("https://choosealicense.com/licenses/isc/") license.`;
  } else if (license === "GNU GPLv3") {
    return `### License
  This page uses the [GNU GPLv3]("https://choosealicense.com/licenses/gpl-3.0/") license.`;
  } else if (license === "none") {
    return "";
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  // call the other functions to format the data in a string and return the full string we want to write to the file

  // return `# ${data.title}
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ### Description
  ${data.description}
  
  ### Installation
  ${data.install}
  
  ### Usage
  ${data.usage}
  
  ### Contributing
  ${data.contribute}
  
  ### Tests
  ${data.testing}
  
  ### Questions
  For questions, please check out my [GitHub]("https://github.com/${
    data.gitHubName
  }") page first.  If you have any further questions, you can email me directly at ${
    data.email
  }.
  
  ${renderLicenseSection(data.license)}

  

`;
}

module.exports = generateMarkdown;
