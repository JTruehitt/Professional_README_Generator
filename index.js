// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
    validate: function (response) {
      if (response.length === 0)
        return console.log("Please enter a valid project title.");
      return true;
    },
  },
  {
    name: "description",
    type: "input",
    message:
      "Please provide a short description explaining the what, why, and how of your project.",
    validate: function (response) {
      if (response.length === 0)
        return console.log("Please enter a valid project title.");
      return true;
    },
  },
  {
    name: "installation",
    type: "input",
    message: "What are the steps required to install your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "Provide instructions and examples for use.",
  },
  {
    name: "credits",
    type: "input",
    message: "List your collaborators, if any.",
  },
  {
    name: "license",
    type: "list",
    message: "What type of license?",
    choices: [
      "None",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public 2.0",
      "Apache 2.0",
      "MIT",
      "Boost Software 1.0",
      "The Unlicense",
    ],
  },
  {
    name: "features",
    type: "input",
    message: "List your cool features, if any.",
  },
  {
    name: "contributors",
    type: "input",
    message:
      "If you would like others to contribute, please add guidelines here.",
  },
  {
    name: "tests",
    type: "input",
    message: "If you have written any tests for your app, please put them here.",
  },
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username?",
    validate: function (response) {
      if (response.length === 0)
        return console.log("Please enter a valid GitHub username.");
      return true;
    },
  },
  {
    name: "email",
    type: "input",
    message: "Finally, what is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) console.log(err);
  });
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);
  const markdown = generateMarkdown(answers);
  writeToFile("./generated_README/README.md", markdown, (err) => {
    if (err) console.log(err);
  });
}

// Function call to initialize app
init();
