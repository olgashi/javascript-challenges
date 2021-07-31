'use strict';
class PerfectNumber {

  static PERFECT = 'perfect';
  static DEFICIENT = 'deficient';
  static ABUNDANT = 'abundant';
  static PRIME = 'prime';

  static classify(num) {
    if (num < 0) {
      throw new Error('number must be a positive integer');
    }
    let divisorsSum = this.getDivisors(num).reduce(((acc, el) => acc + el), 0);
    let classification = '';

    if (divisorsSum === num) {
      classification = this.PERFECT;
    } else if (divisorsSum < num) {
      classification = this.DEFICIENT;
    } else if (divisorsSum > num) {
      classification = this.ABUNDANT;
    } else if (divisorsSum === 1) {
      classification = this.PRIME;
    } else {
      classification = 'UNKNOWN';
    }

    return classification;
  }

  static getDivisors(num) {
    let divisorsArr = [];

    for (let count = 0; count < num; count++) {
      if (num % count === 0) {
        divisorsArr.push(count);
      }
    }
    return divisorsArr;
  }
}

module.exports = PerfectNumber;