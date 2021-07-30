class Element {
  constructor(value, nextElementInList = null) {
    this.value = value;
    this.nextElement = nextElementInList;
  }

  isTail() {
    return this.nextElement ? false : true;

  }
  datum() {
    return this.value;
  }
  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.listHead = null;
  }

  size() {
    let listSize = 0;
    let currentElement = this.head();

    while(currentElement) {
      listSize += 1;
      currentElement = currentElement.next();
    }
    return listSize;
  }

  isEmpty() {
    return this.listHead ? false : true;
  }

  peek() {
    let head = this.head();
    return head ? head.datum() : null;
  }

  head() {
    return this.listHead || null;
  }

  push(value) {
    let element = new Element(value, this.head());
    this.listHead = element;
  }

  pop() {
    let oldHead = this.head();
    let newHead = oldHead.next();
    this.listHead = newHead;

    return oldHead.datum();
  }

  static fromArray(arr) {
    arr = arr || [];
    let newList = new SimpleLinkedList();

    [...arr].reverse().forEach(el => newList.push(el));

    return newList;
  }

  toArray() {
    let outputArray = [];

    if (this.isEmpty()) return outputArray;

    let currentElement = this.head();

    while (currentElement) {
      outputArray.push(currentElement.datum());
      currentElement = currentElement.next();
    }
    return outputArray;
  }

  reverse() {
    let newList = new SimpleLinkedList();
    let currentElement = this.head();

    while (currentElement) {
      newList.push(currentElement.datum());
      currentElement = currentElement.next();
    }

    return newList;
  }
}

module.exports = { Element, SimpleLinkedList }