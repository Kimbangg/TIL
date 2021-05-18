let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let n = Number(input[0]);
const cards = input[1].split(" ").map(Number);
cards.unshift(0);

const dp = [0];

for (let i = 1; i <= n; i++) {
  dp[i] = 0;
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cards[j]);
  }
}

console.log(dp[n]);
