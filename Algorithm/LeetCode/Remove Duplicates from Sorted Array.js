function solution(nums) {
  nums = new Set(nums);

  return nums.size;
}

let nums = [1, 1, 2];
console.log(solution(nums));
