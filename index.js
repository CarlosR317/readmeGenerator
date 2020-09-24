const inquirer = require("inquirer");


const generateMarkdown = require("./util/generateMarkdown");
const fs = require("fs");

// fs.writeFile("");

// array of questions for user
const questions = [
    {
        name: "title",
        message: "What is the name of your project?",
        type: "input",
    }, {
        name: "description",
        message: "what is your project about?",
        type: "input",
    }, {
        // do I put the actual table of contents here?
        name: "table of contents",
        message: "",
        // type: "input",
    }, {
        name: "installation",
        message: "",
    }, {
        name: "usage",
        message: "What is this project used for?",
        type: "input",

    }, {
        name: "license",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    }, {
        name: "contributing",
        Message: "How did you contribute?",
        type: "",
    }, {
        name: "tests",
    }, {
        name: "questions",
    }
];

// do i put this here? I thought the answers come form the user input?
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
    inquirer.prompt(questions).then(function (answers) {
        var readMe = generateMarkdown(answers);
        fs.writeFile("generateReadme.md", function (error, questions) {
            if (error) { return console.log(error) }
            { console.log(questions) }
        })
    })
}

// function call to initialize program (do I need this one here?)
init();
