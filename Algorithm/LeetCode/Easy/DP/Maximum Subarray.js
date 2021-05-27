function solution(nums) {
  nums.forEach((value, index) => {
    if (nums[index - 1] > 0) {
      nums[index] = value + nums[index - 1];
    }
  });
  return Math.max(...nums);
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(solution(nums));
