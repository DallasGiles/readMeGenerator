// Required packages for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateReadMe = require("./genReadme.js");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "use",
            message: "What is this project used for?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address: "
        },
        {
            type: "input",
            name: "license",
            message: "What license is the project under? "
        },
    ]);
}

// Function to write the README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// Function to initialize the app
async function init() {
    try {
        const answers = await promptUser();
        const generateDoc = generateReadMe(answers);
        
        await writeToFile('./README.md', generateDoc);
        console.log('Successfully created README.md');
    }   catch(err) {
        console.log(err);
    }
}

// Function call to initialize the app
init();