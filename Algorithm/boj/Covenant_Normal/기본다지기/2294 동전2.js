function solution() {
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= target; j++) {
      if (dp[j - coins[i]] != 10001) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
  }
  return dp[target - 1];
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let coins = [1, 5, 12];
let target = 15;
const dp = Array(target).fill(10001);
dp[0] = 0;
console.log(solution());
