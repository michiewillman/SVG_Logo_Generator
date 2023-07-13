const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require('./lib/shapes');
const questions = require('./lib/questions');

function getShape(answers) {
  let shape;
  switch(answers.shape){
    case "circle":
      shape = new Circle();
    case "square":
      shape = new Square();
    case "triangle":
      shape = new Triangle();
  }
  shape.setColor(answers.color);
  return shape;
}

// Generates svg content
function generateSVG(data) {
  const svgContent = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${data.xml}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`;
  return svgContent;
}

// Writes svg content to file
function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, (error) => {
    error ? console.log(error) : console.log("Your SVG logo has been successfully generated.")
  });
}

// Starts application on page load/ready
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
    getShape(response);
    return newShape.render()
  })
  .then((response) => {
    return generateSVG(response)
  })
  .then((response) => {
    // TODO: Add dynamically named svg? (ex: MW-green-circle-logo.svg)
    writeToFile("my_logo.svg", response)
  })
  .catch((error) => {
    console.log(error)
  });
}

init();