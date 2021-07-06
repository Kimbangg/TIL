let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = parseInt(input);
const dp = [];
dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
  dp[i] %= 10007;
}

console.log(dp[input]);
