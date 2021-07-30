/* eslint-disable max-len */
class Triangle {
  constructor(side1, side2, side3) {
    this.sidesArray = [side1, side2, side3];

    if (this.isInvalid()) {
      throw new Error('triangle sides violate triangle inequality');
    }
  }

  isEquilateral() {
    return (this.sidesArray[0] === this.sidesArray[1]) && (this.sidesArray[1] === this.sidesArray[2]);
  }

  isIsosecles() {
    return (this.sidesArray[0] === this.sidesArray[1]) || (this.sidesArray[1] === this.sidesArray[2]) || (this.sidesArray[2] === this.sidesArray[0]);
  }

  kind() {
    let triangleKind = '';
    if (this.isEquilateral()) {
      triangleKind = 'equilateral';
    } else if (this.isIsosecles()) {
      triangleKind = 'isosceles';
    } else {
      triangleKind = 'scalene';
    }
    return triangleKind;
  }

  isInvalid() {
    return (this.sidesArray.some(side => side === 0)) ||
    ((this.sidesArray[0] + this.sidesArray[1] <= this.sidesArray[2]) ||
      (this.sidesArray[1] + this.sidesArray[2] <= this.sidesArray[0]) ||
      (this.sidesArray[0] + this.sidesArray[2] <= this.sidesArray[1]))
  }
}

module.exports = Triangle;