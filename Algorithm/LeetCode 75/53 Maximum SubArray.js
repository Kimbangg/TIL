function solution() {
  nums.forEach((value, index) => {
    if (nums[index - 1] > 0) {
      nums[index] = value + nums[index - 1];
    }
  });
  console.log(nums);
  return Math.max(...nums);
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(solution());

// dp를 사용해서 문제를 풀었을 때
// function solution() {
//   let answer = 0;
//   let dp = Array(nums.length).fill(0);
//   dp[0] = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     let prevDp = dp[i - 1] + nums[i];
//     let prevNums = nums[i - 1] + nums[i];
//     dp[i] = Math.max(nums[i], prevDp, prevNums);
//   }

//   answer = Math.max(...dp);
//   return answer;
// }

// let nums = [-2, -1];
// console.log(solution());
