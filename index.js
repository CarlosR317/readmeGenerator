const inquirer = require("inquirer");

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
    },  {
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

// description

// function to initialize program
function init() {
    inquirer.prompt(questionsArray).then((answers) => {
        console.log(answers);
    
        
        var readMe = generateMarkdown(answers);
        fs.writeFile("generateReadme.md",readMe, function (error) {
            if (error) { return console.log(error) }
            else{ console.log("success") }
        })
    })
}

// function call to initialize program (do I need this one here, I do not think that I need this?)
init();


// do I leave this here or put it in the generateMarkdown?

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