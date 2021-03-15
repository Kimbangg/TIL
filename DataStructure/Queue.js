class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(elem) {
    this.dataStore.push(elem);
  }
  dequeue() {
    console.log(this.dataStore.shift());
    return this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  empty() {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

const q = new Queue();
q.enqueue(1);
q.dequeue();
console.log(q.empty());
