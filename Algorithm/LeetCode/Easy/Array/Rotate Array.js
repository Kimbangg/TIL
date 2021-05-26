function solution(nums, k) {
  if (nums.length > k) {
    nums.unshift(...nums.splice(-k));
  } else {
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.splice(-1));
    }
  }
  return nums;
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(solution(nums, k));
// 문제는 이해 했는가 ? [O]
// 어떻게 풀 수 있지 ?
//
