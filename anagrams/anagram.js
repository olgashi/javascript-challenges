/* eslint-disable max-len */
class Anagram {
  constructor(text) {
    this.text = text;
  }
  match(anagramCandidatesArr) {
    let arrayOfMatches = [];
    let wordToMatch = this.text.toLowerCase();
    let wordToMatchSorted = this.sortCharactersInWord(wordToMatch);
    for (let index = 0; index < anagramCandidatesArr.length; index++) {

      if (wordToMatch !== anagramCandidatesArr[index].toLowerCase()) {
        let formalzedCandidate = this.sortCharactersInWord(anagramCandidatesArr[index].toLowerCase());

        if (formalzedCandidate === wordToMatchSorted) {
          arrayOfMatches.push(anagramCandidatesArr[index]);
        }
      }
    }
    return arrayOfMatches;
  }

  sortCharactersInWord(word) {
    return word.split('').sort().join('')
  }
}

module.exports = Anagram;