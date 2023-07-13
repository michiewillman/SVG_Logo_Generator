const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter Logo Text (up to 3 characters)",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter Text Color",
  },
  {
    type: "select",
    name: "shape",
    message: "Select A Shape",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "color",
    message: "Enter Shape Color",
  },
];

module.exports = questions;