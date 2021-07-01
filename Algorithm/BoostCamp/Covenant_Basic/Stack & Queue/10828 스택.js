class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.head === null ? 1 : 0;
  }

  push(data) {
    let node = new node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return -1;
    let node = this.head;
    this.head = node.next;
    this.size--;
    return node.data;
  }

  getSize() {
    return this.size;
  }

  top() {
    return this.isEmpty() ? -1 : this.head.data;
  }
}

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = +input.shift();
let s = new Stack();
let str = "";
for (let i = 0; i < n; ++i) {
  command = input[i];
  switch (command) {
    case "pop":
      str += s.pop() + "\n";
      break;
    case "size":
      str += s.getSize() + "\n";
      break;
    case "empty":
      str += s.isEmpty() + "\n";
      break;
    case "top":
      str += s.top() + "\n";
      break;
    default:
      s.push(+command.substring(5));
  }
}
console.log(str);
