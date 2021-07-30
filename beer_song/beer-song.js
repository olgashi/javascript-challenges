class BeerSong {

  static verses(start, end) {
    let outputStr = '';
    let counter;
    let verse = ''
    let bottle;
    for (counter = start; counter >= end; counter--) {
      bottle = (counter === 1) ? 'bottle' : 'bottles';
      if (counter === 0) {
        verse = `No more ${bottle} of beer on the wall, no more` +
        ` ${bottle} of beer.\nGo to the store and buy some ` +
        `more, 99 ${bottle} of beer on the wall.\n`;
      } else if (counter - 1 === 0) {
        verse = `no more ${bottle} of beer on the wall.\n\n`;
      } else if (counter - 1 !== 0) {
        verse = `${counter - 1} ${(counter - 1 === 1) ? 'bottle' : 'bottles'}` + ' of beer on the wall.';
      }
      outputStr += `\n\n${counter} ${bottle} of beer on the wall, ${counter} ${bottle} of beer.\nTake ${counter === 1 ? 'it' : 'one'} down and pass it around, ${verse}`;
    }
    return outputStr;
  }

  static lyrics() {
    BeerSong.verses(99, 0);
  }
}

console.log(BeerSong.verses(2, 0));

module.exports = BeerSong;