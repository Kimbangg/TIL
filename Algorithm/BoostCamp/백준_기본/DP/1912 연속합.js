function solve() {
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }

  console.log(Math.max(...dp));
}

const nums = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1];
const dp = Array(nums.length).fill(0);
dp[0] = nums[0];
solve();
