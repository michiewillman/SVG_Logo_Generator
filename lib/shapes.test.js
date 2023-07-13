// Tests for validating shapes
const {Circle, Square, Triangle} = require('./shapes.js');

describe("Shape", () => {
  describe("render circle", () => {
    it("should render a circle", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEual(`<circle cx="150" cy="100" r="100" fill="red" />`);
    });
  });
});