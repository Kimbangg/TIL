let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

input.shift();
input = input[0]
  .split(" ")
  .map((ele) => +ele)
  .sort((a, b) => a - b);

let target = 1;

for (let i = 0; i < input.length; i++) {
  if (target < input[i]) {
    break;
  }
  target += input[i];
}

console.log(target);
