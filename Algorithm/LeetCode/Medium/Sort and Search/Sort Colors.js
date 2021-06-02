function solution(nums) {
  nums = nums.sort((a, b) => a - b);

  return nums;
}

let nums = [2, 0, 2, 1, 1, 0];
console.log(solution(nums));
