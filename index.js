const inquirer = require("inquirer");


const generateMarkdown = require("./util/generateMarkdown");
const fs = require("fs");

fs.writeFile("");

// array of questions for user
const questions = [
{name:"title",
message:"StockFinder",
type:"input",}
];

// function to write README file
function generateMarkdown(data) {
    return '#${data.title}'
}

// description

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(answers){
    generateMarkdown(data);
})
}

// function call to initialize program
init();
