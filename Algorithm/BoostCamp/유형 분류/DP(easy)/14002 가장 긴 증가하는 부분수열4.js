function solve() {
  const answer = [];

  for (let i = 1; i < n; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let max = dp[n - 1];

  for (let k = dp.length - 1; k >= 0; k--) {
    if (max === dp[k]) {
      answer.unshift(nums[k]);
      max--;
    }
  }
  console.log(answer);
}
const n = 6;
const nums = [10, 20, 10, 30, 20, 50];
const dp = Array(nums.length).fill(0);
dp[0] = 1;

solve();
