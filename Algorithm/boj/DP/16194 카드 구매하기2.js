const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = parseInt(input[0]);

const cards = input[1].split(" ").map((v) => parseInt(v));
cards.unshift(0);

const dp = Array(n + 1).fill(1000 * 10000);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + cards[j]);
  }
}

console.log(dp[n]);
