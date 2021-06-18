function solve() {
  const dp = Array(n).fill(0);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    dp[i] = 1;

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
      }
    }
  }
  console.log(dp);
}
const n = 6;
const nums = [10, 20, 10, 30, 20, 50];
solve();
