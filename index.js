const inquirer = require("inquirer");

const axios = require("axios");

// this was provided by github doc resources.
// what do I put in the ('')
axios.get('')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

//this was also provided by Github resources, says it is to post things but I do not think i actually need this one   

//   axios.post('', {
//     firstName: 'Carlos',
//     lastName: 'Ramirez'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// github resources said to put this to get API, the above part is supposed to be doing the same thing as well
// Accept: application/vnd.github.v3+json

const generateMarkdown = require("./util/generateMarkdown");
const fs = require("fs");


// array of questions for user
const questionsArray = [
    {
        name: "title",
        message: "What is the name of your project?",
        type: "input",
    }, {
        name: "description",
        message: "What is your project about?",
        type: "input",
    }, {
        // do I put the actual table of contents here or do I put something that brings you to the table of contents on the bottom?
        name: "table of contents",
        message: "",
        // type: "input", ?
    }, {
        name: "installation",
        message: "Installation instructions",
        type: "input",
    }, {
        name: "usage",
        message: "Information on usage?",
        type: "input",

    }, {
        name: "license",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    }, {
        name: "contributing",
        Message: "guidelines to contribution?",
        type: "input",
    }, {
        name: "tests",
        message: "Instructions on test",
        type: "input",
    }, {
        // can I put more than one message or do I need to make to different questions object
        name: "questions",
        message: "What is your GitHub user name",
        message: "what is your GitHub email",
        type: "input",
    }
];

// do i put this here? I thought the answers come form the user input?
// I am pretty sure that I need to add a filter but where would I put it, does it go in the answers?
then(answers => { })


// here is my table of contents. do I leave it here or do I put it in the array

// # Table of contents
// 1. [Title](#title)
// 2. [Description](#description)
// 3. [Installation](#installation)
// 4. [Usage](#usage)
// 5. [License](#license)
// 6. [Contributing](#contributing)
// 7. [Test](#tests)
// 8. [Questions](#questions)

// ## Title of the project <a name="title"></a>
//do I type the title here or does it get placed here by the user input?

// ## Description of the project <a name="description"></a>
// do I type the description here or does it get placed here by the user input?

// ## Installation <a name="installation"></a>
// do I type the installation here or does it get placed here by the user input?

// ### Usage for the project <a name="usage"></a>
// do I type the usage here or does it get placed here by the user input?

// ## License of project <a name="license"></a>
// do I type the license here or does it get placed here by the user input?
// notice: MIT license 
// "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

// ## Contributions to project <a name="contributing"></a>
// do I type the contributions here or does it get placed here by the user input?

// ## Tests <a name="tests"></a>
// do I type the tests here or does it get placed here by the user input?

// ## Questions <a name="questions"></a>
// do I type the questions here or does it get placed here by the user input?

// description

// function to initialize program
function init() {
    inquirer.prompt(questionsArray).then((answers) => {
        console.log(JSON.stringify(answers, null, ''));
        var readMe = generateMarkdown(answers);
        fs.writeFile("generateReadme.md", function (error, questionsArray) {
            if (error) { return console.log(error) }
            { console.log(questionsArray) }
        })
    })
}

// function call to initialize program (do I need this one here, I do not think that I need this?)
init();
