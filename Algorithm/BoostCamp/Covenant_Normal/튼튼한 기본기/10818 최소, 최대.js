function solution(nums) {
  nums = nums.sort((a, b) => a - b);

  console.log(nums[0]);
  console.log(nums[nums.length - 1]);
}

let nums = [20, 10, 35, 30, 7];
console.log(solution(nums));
