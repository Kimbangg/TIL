function solution(nums) {
  nums = nums.splice(-3);

  return nums[0];
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000];
console.log(solution(nums));
