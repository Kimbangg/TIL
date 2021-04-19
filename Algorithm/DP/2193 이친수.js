let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let dp = [0, BigInt("1"), BigInt("1")];

for (let i = 3; i <= parseInt(input); i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[parseInt(input)].toString());