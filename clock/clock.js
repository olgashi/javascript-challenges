'use strict';

class Clock {
  constructor() {
    this.hours = 0;
    this.minutes = 0;
  }
  static MINS_IN_HOUR = 60;
  static HOURS_IN_DAY = 24;

  static at(newHours, newMinutes = 0) {
    let newClock = new Clock();
    newClock.hours = newHours;
    newClock.minutes = newMinutes;
    return newClock;
  }

  isEqual(clock2) {
    return (this.hours === clock2.hours && this.minutes === clock2.minutes);
  }

  toString() {
    return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`;
  }

  add(minutesToAdd) {

    if (Math.floor(minutesToAdd / Clock.MINS_IN_HOUR) > 0) {
      let hoursToAdd = Math.floor(minutesToAdd / Clock.MINS_IN_HOUR);
      let minsToAdd = minutesToAdd % Clock.MINS_IN_HOUR;

      let newMinutesTotal = this.minutes + minsToAdd;

      if (newMinutesTotal > Clock.MINS_IN_HOUR) {
        newMinutesTotal = newMinutesTotal % Clock.MINS_IN_HOUR;
        hoursToAdd += 1;
      }

      if (this.hours + hoursToAdd > 23) {
        this.hours = (this.hours + hoursToAdd) % Clock.HOURS_IN_DAY;
      } else {
        this.hours += hoursToAdd;
      }

      this.minutes = newMinutesTotal;
    } else {
      this.minutes += minutesToAdd;
    }
    return this;
  }

  subtract(minutesToSubtract) {
    let timeInMinutes = (this.hours * Clock.MINS_IN_HOUR) + this.minutes;
    timeInMinutes -= minutesToSubtract;

    this.hours = Math.floor((timeInMinutes / Clock.MINS_IN_HOUR) % Clock.HOURS_IN_DAY);
    this.minutes = timeInMinutes % Clock.MINS_IN_HOUR;
    if (this.hours < 0) this.hours += 24;
    if (this.minutes < 0) this.minutes += 60;

    return this;
  }
}

// let clock1 = Clock.at(15, 37);
// let clock2 = Clock.at(15, 36);
// let clock3 = Clock.at(14, 37);
let clock1 = Clock.at(15, 37);
let clock2 = Clock.at(15, 36);
let clock3 = Clock.at(14, 37);

console.log(clock1);
console.log(clock2);
console.log(clock1.isEqual(clock2));

module.exports = Clock;