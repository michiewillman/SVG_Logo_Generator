const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require('./lib/shapes');
const questions = require('./lib/questions');

// Gets shape from answers --> calls on classes
function getShape(answers) {
  let shape;
  switch (answers.shape) {
    case "circle":
      shape = new Circle();
      break;
    case "square":
      shape = new Square();
      break;
    case "triangle":
      shape = new Triangle();
      break;
  }
  shape.setColor(answers.color);
  shape.setText(answers.text);
  shape.setTextColor(answers.textColor);
  return shape;
}

// Generates svg content --> render() pulls in shape xml string with shape fill color
function generateSVG(data) {
  const svgContent = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${data.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`;
  return svgContent;
}

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