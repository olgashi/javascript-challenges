/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/* eslint-disable max-len */
/*
A

A - 1

=>
A

B - 2
=>
 A  - 2 spaces
B B - 1 space in the middle
 A - 2 spaces

ABC - 3
  A - 2 spaces
 B B - 1 space
C   C - 3 spaces in the middle
 B B
  A

ABCDE - 5

    A - 4 spaces   {outerSpace}{letter}{outerSpace} // outerSpace = numLetters - 1
   B B - 1         {outerSpace}{letter}{innerSpace}{letter}{outerSpace} // innerSpace: if (numLetters === 1) {innerSpace===0} else {innerSpace = 1} 
  C   C - 3
 D     D - 5
E       E - 7
 D     D
  C   C
   B B
    A
*/

class Diamond {
  static makeDiamond = function(letter) {
    let allLettersArr = this.getAllLetters(letter);

    let outerSpace = allLettersArr.length - 1;
    let innerSpace = 1;
    let resultString = '';

    if (allLettersArr.length !== 1) {
      for (let count = 0; count < allLettersArr.length; count++) {
        resultString += this.makeRow(allLettersArr[count], outerSpace, innerSpace);
        if (count > 0) innerSpace += 2;

        outerSpace -= 1;
      }
      outerSpace = 1;
      innerSpace = allLettersArr.length;

      for (let count = allLettersArr.length - 2; count >= 0; count--) {
        resultString += this.makeRow(allLettersArr[count], outerSpace, innerSpace);
        if (count !== 1) innerSpace -= 2;
        outerSpace += 1;
      }
    } else {
      resultString = `${letter}\n`;
    }
    return resultString;
  }

  static makeRow(letter, outerPad, innerPad = 0) {
    if (letter === 'A') return `${' '.repeat(outerPad)}${letter}${' '.repeat(outerPad)}\n`;
    if (letter === 'B') return `${' '.repeat(outerPad)}${letter}${' '.repeat(1)}${letter}${' '.repeat(outerPad)}\n`;

    return `${' '.repeat(outerPad)}${letter}${' '.repeat(innerPad)}${letter}${' '.repeat(outerPad)}\n`;
  }

  static getDiamondSize(letter) {// A is 65
    return letter.codePointAt(0) - 64;
  }

  static getAllLetters(endingLetter) {
    let totalLetters = endingLetter.codePointAt(0) - 64;

    let arr = [];
    for (let index = 0; index < totalLetters; index++) {
      arr.push(String.fromCharCode(65 + index));
    }
    return arr;
  }


}

// console.log(Diamond.makeDiamond('A'));
console.log(Diamond.makeDiamond('B'));
console.log(Diamond.makeDiamond('C'));
// console.log(Diamond.makeDiamond('E'));

module.exports = Diamond;