'use strict';
class DNA {
  constructor(dnaSequence) {
    this.sequence = dnaSequence;
  }

  hammingDistance(dna) {
    let shorterStrand = '';
    let longerStrand = '';
    if (this.sequence.length >= dna.length) {
      [shorterStrand, longerStrand] = [dna, this.sequence];
    } else {
      [shorterStrand, longerStrand] = [this.sequence, dna];
    }

    let numStrands = 0;
    for (let index = 0; index < shorterStrand.length; index++) {
      if (shorterStrand[index] !== longerStrand[index]) {
        numStrands += 1;
      }
    }
    return numStrands;
  }
}

module.exports = DNA;