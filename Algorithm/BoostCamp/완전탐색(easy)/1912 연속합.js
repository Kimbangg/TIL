function solve() {
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }

  console.log(Math.max(...dp));
}

const n = 10;
const nums = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1];
const dp = Array(n + 1).fill(0);
dp[0] = nums[0];
solve();

// 구간 합으로 문제 풀이
// function solve() {
//   let prefix_sum = Array(n + 1).fill(0);
//   let max = -Infinity;

//   for (let i = 1; i <= n; i++) {
//     prefix_sum[i] = prefix_sum[i - 1] + nums[i - 1];
//   }

//   for (let end = n - 1; end >= 0; end--) {
//     for (let start = end - 1; start >= 0; start--) {
//       let section = prefix_sum[end] - prefix_sum[start];

//       if (max < section) {
//         max = section;
//       }
//     }
//   }
//   console.log(max);
// }
