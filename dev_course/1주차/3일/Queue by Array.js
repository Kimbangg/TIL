class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue[this.rear++] = value;
  }

  shift() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;

    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(4);
console.log(queue.shift());
queue.push(8);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.shift());
console.log(queue.shift());
