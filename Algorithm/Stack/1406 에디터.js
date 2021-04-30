let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let strings = input.shift();
let M = input.shift();

let leftStack = strings.split("");
let rightStack = [];

for (let i = 0; i < M; i++) {
  let command = input[i].split(" ");
  switch (command[0]) {
    case "L":
      if (leftStack.length != 0) {
        rightStack.push(leftStack.pop());
      }
      break;
    case "D":
      if (rightStack.length != 0) {
        leftStack.push(rightStack.pop());
      }
      break;
    case "B":
      if (leftStack.length != 0) {
        leftStack.pop();
      }
      break;
    case "P":
      leftStack.push(command[1]);
      break;
  }
}
let result = leftStack.concat(rightStack.reverse()).join("");
console.log(result);
