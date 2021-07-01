const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map((e) => +e);
const coins = input[1]
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);

for (let i = N - 1; i >= 0; i--) {
  if (K === 0) {
    break;
  }
  if (coins[i] > K) {
    continue;
  }
  answer += Math.floor(K / coins[i]);
  K %= coins[i];
}

console.log(answer);
