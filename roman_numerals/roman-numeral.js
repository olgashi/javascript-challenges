/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
'use strict';

/*
I - 1
II - 2
III - 3
IV - 4
V - 5
VI -6
VII - 7
VIII - 8
IX - 9
X - 10
XX - 20
XXX - 30
XL - 40
L - 50
XC - 90
C - 100
CD - 400
D - 500
XM - 900
M - 1000
*/

class RomanNumeral {
  constructor(decimalNum) {
    this.decimalNum = decimalNum;
  }

  static decimalToRoman = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI',
    7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', //remove 20, 30
    40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D',
    900: 'CM', 1000: 'M'
  }

  toRoman() {
    let decimal = this.decimalNum; //48
    let remainder;
    let roman = '';

    while (true) {
      let whole;
      if (remainder === 0) break;
      let divisor = this.getDivisor(decimal); // 

      if (decimal in RomanNumeral.decimalToRoman) {
        roman += RomanNumeral.decimalToRoman[decimal];
        remainder = 0;
      } else {
        ({remainder, whole} = this.getDivMod(decimal, divisor));
        if ((whole * divisor) in RomanNumeral.decimalToRoman) {
          roman += RomanNumeral.decimalToRoman[whole * divisor];
        } else {
          roman += RomanNumeral.decimalToRoman[divisor].repeat(whole);
        }
      }
      decimal = remainder;
    }
    return roman;
  }

  getDivMod(num, divisor) {
    let remainder = num % divisor;
    let whole = Math.floor(num / divisor);
    return {remainder, whole};
  }

  getDivisor(num) {
    let divisor = null;
    if (num >= 1000) {
      divisor = 1000;
    } else if (num >= 500) {
      divisor = 500;
    } else if (num >= 100) {
      divisor = 100;
    } else if (num >= 50) {
      divisor = 50;
    } else if (num >= 10) {
      divisor = 10;
    }
    return divisor;
  }
}
// let number = new RomanNumeral(402);

// console.log(number.toRoman());

module.exports = RomanNumeral;