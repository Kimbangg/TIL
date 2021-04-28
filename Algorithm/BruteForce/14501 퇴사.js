function solution() {
  for (let i = N - 1; i >= 0; i--) {}
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let dp = new Array(N + 1).fill(0);

const TP = Number(input[1])
  .splice(1, N)
  .map((e) => e.split(" "));

solution();
