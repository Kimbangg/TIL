function solution(nums) {
  nums = nums.sort((a, b) => b - a);

  return nums;
}

const nums = [15, 27, 12];
console.log(solution(nums));
