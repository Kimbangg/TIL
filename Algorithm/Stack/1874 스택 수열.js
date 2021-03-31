let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const stack = [];
let message = "";
let index = 1;

for (let i = 1; i <= n; i++) {
  let tmp = Number(input[i]);

  while (index <= tmp) {
    stack.push(index++);
    message += "+\n";
  }
  if (stack[stack.length - 1] === tmp) {
    message += "-\n";
    stack.pop();
  } else {
    message = "NO";
    break;
  }
}

console.log(message);
