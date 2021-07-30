class CustomSet {
  constructor(arr = []) {
    let uniqueArray = [];

    arr.forEach(el => {
      if (uniqueArray.indexOf(el) === -1 ) {
        uniqueArray.push(el);
      }});
    this.set = uniqueArray;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(el) {
    return this.set.includes(el);
  }

  isSubset(setArg) {
    if (this.set.length === 0) return true;
    if (this.set.length > 0 && setArg.set.length === 0) return false;
    return this.set.every(el => setArg.contains(el));

  }

  isDisjoint(setArg) {
    if (this.set.length === 0 || setArg.set.length === 0) return true;

    if (this.set.every(el => !setArg.contains(el)) && setArg.set.every(el => !this.contains(el))) {
      return true;
    }
    return false;
  }

  isSame(setArg) {
    if (this.set.length !== setArg.set.length) return false;

    let set1 = [...this.set];
    let set2 = [...setArg.set];

    set1.sort();
    set2.sort();

    return set1.every((el, index) => el === set2[index]);
  }

  add(el) {
    if (!this.contains(el)) this.set.push(el);
    return this;
  }

  intersection(setArg) {
    let outputSet = new CustomSet();

    if (this.isEmpty() || setArg.isEmpty()) return outputSet;

    this.set.forEach(el => {
      if (setArg.contains(el)) {
      outputSet.add(el);
    }});

    return outputSet;
  }

  difference(setArg) {
    if (setArg.isEmpty()) return this;

    if (this.isEmpty()) return new CustomSet();

    let outputSet = new CustomSet();

    this.set.forEach(el => {
      if (!setArg.contains(el)) {
        outputSet.add(el)
      }
    })
    return outputSet;
  }

  union(setArg) {
    let outputSet = new CustomSet();

    [this.set, setArg.set].forEach(el => {
      for (let index = 0; index < el.length; index++) {
        if (!outputSet.contains(el[index])) {
          outputSet.add(el[index])
        }
      }
    })
    return outputSet;
  }
}
module.exports = CustomSet;