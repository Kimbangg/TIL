function solution(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1));
    }
  }
  return nums;
}

let nums = [0, 0, 3, 1];

console.log(solution(nums));
