'use strict';

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }
  static DAYS_OF_THE_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  static TEENTH_DAYS = [13, 14, 15, 16, 17, 18, 19];

  day(dayOfTheWeek, dayCategory) {
    dayOfTheWeek = dayOfTheWeek.toLowerCase();
    dayCategory = dayCategory.toLowerCase();

    let instancesDayArray = this._getAllInstancesForTheDay(dayOfTheWeek);
    let matchingDaysByCategory = this._categorizeDays(instancesDayArray);

    let dayToReturn = matchingDaysByCategory[dayCategory];
    if (dayToReturn === null) {
      return null;
    }

    return dayToReturn.toString();
  }

  _getAllInstancesForTheDay(dayOfTheWeekToFind) {
    let allDaysThisMonth = [];

    for (let date = 1; date <= 31; date++) {
      let currentDate = new Date(this.year, this.month - 1, date);
      let currentDayOfWeek = Meetup.DAYS_OF_THE_WEEK[currentDate.getDay()];

      if ((currentDayOfWeek === dayOfTheWeekToFind) && currentDate.getMonth() + 1 === this.month) {
        allDaysThisMonth.push(currentDate);
      }
    }
    return allDaysThisMonth;
  }

  _categorizeDays(daysArr) {
    let cateogryArray = ['first', 'second', 'third', 'fourth', 'fifth'];
    let mappedDays = {
      first: null,
      second: null,
      third: null,
      fourth: null,
      fifth: null,
      last: null,
      teenth: null
    };

    for (let index = 0; index < daysArr.length; index++) {
      if (Object.keys(cateogryArray).includes(String(index))) { 
        mappedDays[cateogryArray[index]] = daysArr[index];
      }

      if (index === daysArr.length - 1) {
        mappedDays['last'] = daysArr[index];
      }

      if (Meetup.TEENTH_DAYS.includes(daysArr[index].getDate())) {
        mappedDays['teenth'] = daysArr[index]
      }
    }
      return mappedDays;
    }
}

module.exports = Meetup;