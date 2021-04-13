const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trimRight().split("\n");

const T = parseInt(input[0]);
const dp = Array(11).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
for (let t = 1; t <= T; t++) {
  const n = parseInt(input[t]);
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  console.log(dp[n]);
}
