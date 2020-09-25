// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
  ${answers.description}
  ## Table of content 
  1. [Title](#title)
  2. [Description](#description) 
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
  8. [Questions](#questions)

  #installation
  ${answers.installation}
  
  #usage
  ${answers.usage}${answers.license}${answers.contributing}${answers.tests}${answers.github}${answers.email}
`;

}

module.exports = generateMarkdown;
