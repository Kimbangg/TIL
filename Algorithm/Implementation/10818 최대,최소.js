let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = parseInt(input[0]);
let array = input[1].split(" ");
let max = -987654321;
let min = 987654321;

for (let i = 0; i < n; ++i) {
  let number = parseInt(array[i]);
  if (number < min) {
    min = number;
  }
  if (number > max) {
    max = number;
  }
}

console.log(min + " " + max);
