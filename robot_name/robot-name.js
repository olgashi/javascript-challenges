'use strict';

const seedrandom = require('seedrandom');
Math.seedrandom = require('seedrandom');

class Robot {
  constructor() {
    this.modelName = null;
  }
  static currentNames = [];

  name() {
    if (!this.modelName) {
      this.modelName = this.assignUniqueName();
      Robot.currentNames.push(this.modelName);
    }
    return this.modelName;
  }

  reset() {
    Robot.currentNames = Robot.currentNames.filter(name => name !== this.modelName);
    this.modelName = null;
  }

  assignUniqueName() {
    let newName = `${this.generateLetterSequence(2)}${this.generateNumberSequence(3)}`;
    while (Robot.currentNames.includes(newName)) {
      newName = this.generateNewName();
    }
    return newName;
  }

  generateLetterSequence(prefix_length) {
    let output = '';
    for (let index = 0; index < prefix_length; index++) {
      let number = Number(this.generateRandomNumber(26));
      output += String.fromCharCode(65 + number);
    }
    return output;
  }

  generateNumberSequence(postfix_length) {
    let output = '';
    for (let index = 0; index < postfix_length; index++) {
      output += String(this.generateRandomNumber(10));
    }
    return output;
  }

  generateRandomNumber(limit) {
    let rng = seedrandom();
    return Math.floor(rng() * limit).toFixed();
  }
}

module.exports = Robot;