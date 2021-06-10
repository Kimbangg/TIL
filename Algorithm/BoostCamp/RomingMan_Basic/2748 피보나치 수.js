function solve(n) {
  for (let i = 2; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp[n]);
}

let n = 10;
const dp = Array(n + 1).fill(0);
dp[1] = 1;
solve(n);
