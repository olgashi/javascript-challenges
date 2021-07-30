'use strict';
class Octal {
  constructor(numString) {
    this.numString = numString || '';
  }

  toDecimal() {
    let outputNumber = 0;
    if (this.containsInvalidChars(this.numString)) {
      return outputNumber;
    }
    let inputNumString = (this.numString).toString();
    let power = 0;
    for (let index = inputNumString.length - 1; index >= 0; index--) {
      outputNumber += Number(inputNumString[index]) * (8 ** power);
      power++;
    }
    return outputNumber;
  }

  containsInvalidChars(str) {
    return str.match(/[a-z89]/gi);
  }
}

module.exports = Octal;

'1238'.match(/[a-z89]/gi)