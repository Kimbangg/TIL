function solution(nums) {
  if (nums.length < 3) return false;
  let n1 = Number.MAX_VALUE;
  let n2 = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= n1) {
      n1 = nums[i];
    } else if (nums[i] <= n2) {
      n2 = nums[i];
    } else {
      return true;
    }
  }

  return false;
}

let nums = [2, 1, 5, 0, 4, 6];

console.log(solution(nums));
// 1. 문제를 올바르게 이해했는가? [O]
// 2. 어떻게 문제를 풀 수 있는가?
// 어려운 문제를 보면 생각을 멈추려는 경향이 있는데 이를 어떻게 해결 할 수 있을까?

// [ 20, 100, 10, 12, 5, 13 ]
// 20 => 100, 10, 12, 5, 13

// 1. 20 < 100 =>
//
//
