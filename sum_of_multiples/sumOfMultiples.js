'use strict';

class SumOfMultiples {
  constructor(set) {
    if (set === undefined) {
      this.set = [3, 5];
    } else {
      this.set = Array.from(arguments);
    }
  }
  to(limit) {
    return this.calculateSumOfMultiples(limit);
  }

  static to(limit) {
    let newObj = new SumOfMultiples();
    return newObj.calculateSumOfMultiples(limit);
  }

  calculateSumOfMultiples(limit) {
    let multiplesSet = new Set();
    this.set.forEach(num => {
      let currentMultiple = num;
      let counter = 0;
      while (true) {
        currentMultiple = num * counter++;
        if (currentMultiple >= limit) break;

        if (!multiplesSet.has(currentMultiple)) {
          multiplesSet.add(currentMultiple);
        }
      }
    })
    return Array.from(multiplesSet).reduce((acc, val) => acc + val, 0);
  }
}

module.exports = SumOfMultiples;