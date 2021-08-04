'use strict';

class BeerSong {

  static verse(numBottles) {
    let numBottlesFirst = numBottles === 0 ? '' : numBottles + ' ';
    let numBottlesLast = (numBottles - 1) < 0 ? 99 : (numBottles - 1);

    let bottleNumStringFirst = this.setNumberOfBottlesString(numBottlesFirst); //TODO rename
    let bottleNumStringLast = this.setNumberOfBottlesString(numBottlesLast);

    let takeOneOrIt = Number(numBottlesFirst) === 1 ? 'it' : 'one';

    let songVersePart1 = `${numBottlesFirst}${bottleNumStringFirst.startsWith('no') ? (bottleNumStringFirst.slice(0,1)).toUpperCase() + bottleNumStringFirst.slice(1) : bottleNumStringFirst} of beer on the wall, ${numBottlesFirst}${bottleNumStringFirst} of beer.\n`;
    let songVersePart2 = `Take ${takeOneOrIt} down and pass it around,${numBottlesLast === 0 ? '' : ' ' + numBottlesLast} ${bottleNumStringLast} of beer ` +
      "on the wall.\n"

    if (bottleNumStringFirst.startsWith('no')) {
      let parts = songVersePart2.split(',');
      songVersePart2 = 'Go to the store and buy some more,' + parts[1];
    }

    return songVersePart1 + songVersePart2;

  }

  static verses() {
    let args = Array.from(arguments);

    let allVerseNum = [];

    for (let count = args[1]; count <= args[0]; count++) {
      allVerseNum.push(count);
    }

    let output = allVerseNum.reverse().map(numBottles => this.verse(numBottles)).join('\n');
    return output;
  }

  static lyrics() {
    return this.verses(99, 0);

  }
  static setNumberOfBottlesString(numBottles) {
    let outputBottles = '';
    if (Number(numBottles) === 1) {
      outputBottles = 'bottle';
    } else if (!numBottles) {
      outputBottles = 'no more bottles';
    } else {
      outputBottles = 'bottles';
    }

    return outputBottles;
  }

}

module.exports = BeerSong;