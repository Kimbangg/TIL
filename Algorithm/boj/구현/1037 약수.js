const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const value = input[1].split(" ").map((c) => +c);

function solution() {
  let max = 0;
  let min = Infinity;

  value.forEach((num) => {
    if (num > max) max = num;
    if (num < min) min = num;
  });

  return max * min;
}

console.log(solution());
