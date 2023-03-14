const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");
const Triangle = shapes.Triangle;
const Circle = shapes.Circle;
const Square = shapes.Square;

inquirer
  .prompt([
    {
      type: "input",
      name: "logoLetters",
      message: "Enter up to three characters for the text:",
      validate: function(input) {
        return input.length <= 3;
      }
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color for the text:",
      validate: function(input) {
        return input.length > 0;
      }
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Triangle", "Circle", "Square"]
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color for the shape:",
      validate: function(input) {
        return input.length > 0;
      }
    }
  ])
  .then(function(answers) {
    let shape;
    switch (answers.shape) {
      case "Triangle":
        shape = new Triangle();
        break;
      case "Circle":
        shape = new Circle();
        break;
      case "Square":
        shape = new Square();
        break;
    }
    shape.setColor(answers.textColor, answers.shapeColor, answers.logoLetters);
    const svg = shape.render();

    fs.writeFile("logo.svg", svg, function(err) {
      if (err) {
        console.error(err);
      }
      console.log("SVG file written to disk successfully!");
    });
  });
