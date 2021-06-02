// function solution(nums) {
//   if (!nums) {
//     return -1;
//   }

//   let left = 0;
//   let right = nums.length - 1;
//   let m1 = 0;
//   let m2 = 0;

//   while (left < right) {
//     m1 = Math.floor((left + right) / 2);
//     m2 = m1 + 1;

//     if (nums[m1] < nums[m2]) {
//       left = m2;
//     } else {
//       right = m1;
//     }
//   }
//   return left;
// }

function solution(nums) {
  let max = Math.max(...nums);

  return nums.indexOf(max);
}

const nums = [1, 2, 1, 3, 5, 6, 4];

console.log(solution(nums));

// 1) 문제를 풀면서 느낄 수 있는 점

// 예외처리를 할 수 있는 것들을 미리 해주면, 불필요한 연산이 준다.
// => Refactoring을 할 때, 사전에 처리 할 수 있는게 있는지?

// 문제를 볼 떄, 먼저 손을 대지 말고 어떻게 풀지에 대해서 고민.
