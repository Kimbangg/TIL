const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 0;
let N = Number(input[0]);
let change = 1000 - N;
const coins = [500, 100, 50, 10, 5, 1];

for (let i = 0; i < coins.length; i++) {
  if (change === 0) {
    break;
  }
  if (coins[i] > change) {
    continue;
  }
  count += Math.floor(change / coins[i]);
  change %= coins[i];
}

console.log(count);
