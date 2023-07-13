// Main class for all common shape attributes
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color){
    this.color = color;
  }
}

// Individual shapes extending main class
class Circle extends Shape {
  constructor(color) {
    super(color);
    this.xml = `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
    this.xml = `<rect x="10" y="10" width="30" height="30" fill="${color}"/>`
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
    this.xml = `<polygon points="100, 15 200, 200 0, 200" fill="${color}"/>`
  }
}

module.exports = { Circle, Square, Triangle };;