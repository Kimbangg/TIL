let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const stack = [];
let message = "";
let counter = 1;

for (let i = 1; i <= N; i++) {
  let n = Number(input[i]);

  while (counter <= n) {
    stack.push(counter++);
    message += "+\n";
  }
  if (stack[stack.length - 1] === n) {
    message += "-\n";
    stack.pop();
  } else {
    message = "NO";
    break;
  }
}

console.log(message);
