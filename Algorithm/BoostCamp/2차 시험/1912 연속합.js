function solution() {
  const dp = Array(n + 1).fill(0);

  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 1], nums[i]);
  }
  console.log(dp);
}

const n = 10;
const nums = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1];
solution();
