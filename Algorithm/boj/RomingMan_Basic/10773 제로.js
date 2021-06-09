function solve(n, nums) {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      stack.push(nums[i]);
    } else {
      stack.pop();
    }
  }

  answer = stack.length === 0 ? 0 : stack.reduce((acc, value) => acc + value);
  return answer;
}

let n = 4;

let nums = [3, 0, 4, 0];

console.log(solve(n, nums));

// 1. 문제를 제대로 이해했는가? [0]
// 2. 어떻게 풀 수 있는가 ?
// 스택 같은데
