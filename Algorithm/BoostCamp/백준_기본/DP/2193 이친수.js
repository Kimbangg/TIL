function solve() {
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp[n]);
}

const n = 4;
const dp = [0, 1, 1];
solve();
