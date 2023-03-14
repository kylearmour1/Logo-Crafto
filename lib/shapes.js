class Triangle {
    constructor() {
        this.textColor = '';
        this.shapeColor = '';
        this.logoLetter = '';
   
}
    setColor(textColor, shapeColor, logoLetters) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.logoLetters = logoLetters;
    }
    
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.textColor}" />
            <text x="150" y="125" font-size="45" text-anchor="middle" fill="${this.shapeColor}">${this.logoLetters}</text>
            </svg>
            `;
    }
}




class Circle {
    constructor() {
      this.textColor = '';
      this.shapeColor = '';
      this.logoLetter - '';
    }
  
    setColor(textColor, shapeColor, logoLetters) {
      this.textColor = textColor;
      this.shapeColor = shapeColor;
      this.logoLetters = logoLetters;
    }
  
    render() {
      return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${this.textColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.shapeColor}">${this.logoLetters}</text>
        </svg>
      `;
    }
  }
  




class Square {
    constructor() {
        this.textColor = '';
        this.shapeColor = '';
        this.logoLetters = '';
   
}
    setColor(textColor, shapeColor, logoLetters) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.logoLetters = logoLetters;
    }
    
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="25" width="250" height="150" fill="${this.textColor}" />
        <text x="110" y="125" font-size="60" text-anchor="middle" fill="${this.shapeColor}">${this.logoLetters}</text>
        </svg>
        `;
    }
}
module.exports = {
    Triangle,
    Circle,
    Square
};

