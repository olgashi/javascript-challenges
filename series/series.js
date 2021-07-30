/* eslint-disable max-len */
'use strict';

class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    this.validateSeriesLength(sliceLength);

    let index = 0;
    let outputSlicesArray = [];
    while (true) {
      if ((index + sliceLength) > this.series.length) break;

      let subArr = this.series.slice(index, index + sliceLength).split('').map(el => Number(el));
      outputSlicesArray.push(subArr);
      index++;
    }
    return outputSlicesArray;
  }

  validateSeriesLength(length) {
    if (length > this.series.length) {
      throw new Error('Slice length cannot be greater than the length of the series');
    }
  }
}

module.exports = Series;
