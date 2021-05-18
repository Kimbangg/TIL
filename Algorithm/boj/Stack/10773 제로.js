function solution() {
  let stack = [];
  let result = 0;

  for (let i = 1; i <= K; i++) {
    const value = Number(Money[i]);

    if (value === 0) {
      stack.pop();
    } else {
      stack.push(value);
    }
  }

  for (let i = 0; i < stack.length; i += 1) {
    result += stack[i];
  }

  console.log(result);
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let K = input.shift();
let Money = input.split("\n").map(Number);

solution();
