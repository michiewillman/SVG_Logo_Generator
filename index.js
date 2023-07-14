const inquirer = require("inquirer");
const fs = require("fs");
const questions = require('./lib/questions');
const { getShape, generateSVG } = require('./Utils/generateSvg');

// Starts application on page load/ready
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    return getShape(answers);
  })
  .then((response) => {
    console.log(response);
    return generateSVG(response)
  })
  .then((content) => {
    // TODO: Add dynamically named svg? (ex: MW-green-circle-logo.svg)
    fs.writeFile("my_logo.svg", content, (error) => {
      error ? console.log(error) : console.log("Your SVG logo has been successfully generated.")
    })
  })
  .catch((error) => {
    console.log(error)
  });
}

init();