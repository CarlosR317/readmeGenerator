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
    },{
        name: "table of contents",
        message: "",
        type: "input",
    }, {
        name:"usage",
        message: "What is this project used for?",
        type: "input",
    
    },{
        name:"license",

    },{
        name: "contributing",
        Message: "How did you contribute?",
        type: "",
    },{
        name: "tests",
    }, {
        name:"questions",
    }
];
then(answers => {})

// description

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers) {
        var readMe = generateMarkdown(answers);
        fs.writeFile("generateReadme.md", function (error) {
            if (error.isTtyError) {} else {then(function(answers){}) }
        })
    })
}

// function call to initialize program
init();
