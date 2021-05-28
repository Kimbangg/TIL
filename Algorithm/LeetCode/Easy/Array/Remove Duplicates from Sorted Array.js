function solution(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums;
}

let nums = [1, 1, 2];
console.log(solution(nums));
