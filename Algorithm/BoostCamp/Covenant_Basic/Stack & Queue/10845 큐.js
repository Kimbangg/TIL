class Queue {
  constructor(N) {
    this.arr = new Array(N);
    this.forward = 0;
    this.rear = 0;
  }

  push(num) {
    this.arr[this.rear] = num;
    this.rear++;
  }

  pop() {
    if (this.forward === this.rear) return -1;
    return this.arr[this.forward++];
  }

  size() {
    return this.rear - this.forward;
  }

  empty() {
    return this.forward === this.rear ? 1 : 0;
  }

  front() {
    if (this.forward === this.rear) return -1;
    return this.arr[this.forward];
  }

  back() {
    if (this.forward === this.rear) return -1;
    return this.arr[this.rear - 1];
  }
}

const queue = new Queue(N);

for (let i = 1; i <= N; i++) {
  const command = input[i].split(" ");

  switch (command[0]) {
    case "push":
      queue.push(parseInt(command[1]));
      break;
    case "pop":
      result += queue.pop() + "\n";
      break;
    case "size":
      result += queue.size() + "\n";
      break;
    case "empty":
      result += queue.empty() + "\n";
      break;
    case "front":
      result += queue.front() + "\n";
      break;
    case "back":
      result += queue.back() + "\n";
      break;
  }
}

console.log(result);
