function solution(nums) {
  nums = nums.sort((a, b) => b - a);

  return nums[K - 1];
}

let k = 2;
const nums = [3, 2, 1, 5, 6, 4];
console.log(solution(nums));
