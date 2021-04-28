const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = inputs.shift();
inputs.sort((a, b) => {
  return (a > b) - (a < b);
});

let maxWeight = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  maxWeight = Math.max(maxWeight, inputs[i] * (N - i));
}

console.log(maxWeight);
