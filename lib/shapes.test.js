// Tests for validating shapes
const {Circle, Square, Triangle} = require('./shapes.js');

// Checks render() method on each shape class and makes sure its returning a string with the correct fill color
describe("Shape", () => {
  describe("render circle", () => {
    it("should return string for a red circle", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="100" fill="red" />`);
    });
  });
  describe("render square", () => {
    it("should return string for a blue square", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(`<rect x="10" y="10" width="200" height="200" fill="blue"/>`);
    });
  });
  describe("render triangle", () => {
    it("should return string for a green triangle", () => {
      const shape = new Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual(`<polygon points="100, 15 200, 200 0, 200" fill="$green"/>`);
    });
  });
});