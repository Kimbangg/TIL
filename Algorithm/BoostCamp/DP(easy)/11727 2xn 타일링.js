function solve() {
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[n - 2]) % 10007;
  }
  console.log(dp);
}

let n = 17;

const dp = Array(n).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 3;
solve();
