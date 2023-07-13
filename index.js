const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require('./lib/shapes');
const questions = require('./lib/questions');

new Shapes.Circle
let shape
switch(answers.shape){
  case "circle":
     shape=new Circle()
    shape.setColor(answers.color)

}
generateSVG(shape)


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
  .then((answers) => {
    console.log(answers);
    const newShape = answers.shape;
    return newShape.render()
  })
  .then((shape) => {
    return generateSVG(shape)
  })
  .then((svg) => {
    // TODO: Add dynamically named svg? (ex: MW-green-circle-logo.svg)
    writeToFile("my_logo.svg", svg)
  })
  .catch((error) => {
    console.log(error)
  });
}
