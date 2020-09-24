const inquirer = require("inquirer");


const generateMarkdown = require("./util/generateMarkdown");
const fs = require("fs");

// fs.writeFile("");

// array of questions for user
const questions = [
{name:"title",
message:"What is the name of your project",
type:"input",},{

}

];


// description

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(answers){
    var readMe = generateMarkdown(answers);
    fs.writeFile("generateReadme.md", function(error){
if{}else{}
    })
})
}

// function call to initialize program
init();
