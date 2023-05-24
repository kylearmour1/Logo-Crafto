const shapes = require('./shapes');
const Circle = shapes.Circle;
const Triangle = shapes.Triangle;
const Square = shapes.Square;




describe('Circle', () => {
    test('render method returns the correct string for a circle SVG', () => {
      const shape = new Circle();
      shape.setColor("undefined", "undefined", "undefined");
      expect(shape.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="undefined" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
        </svg>
      `);
    });
  });

  describe('Triangle', () => {
    test('render method returns the correct string for a triangle SVG', () => {
      const triangle = new Triangle();
      triangle.setColor("undefined", "undefined", "undefined");
      expect(triangle.render().replace(/\s+/g, ' ').trim()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="undefined" />
            <text x="150" y="125" font-size="45" text-anchor="middle" fill="undefined">undefined</text>
            </svg>
            `.replace(/\s+/g, ' ').trim());
    });
});

describe('Square', () => {
    test('render method returns the correct string for a square SVG', () => {
      const square = new Square();
      square.setColor("undefined", "undefined", "undefined");
      expect(square.render().replace(/\s+/g, ' ').trim()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="25" width="250" height="150" fill="undefined" />
        <text x="110" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
        </svg>
        `.replace(/\s+/g, ' ').trim());
    });
});




