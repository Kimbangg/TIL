function solution(nums) {
  let max = 0;
  let min = Infinity;

  nums.forEach((num) => {
    if (num > max) max = num;
    if (num < min) min = num;
  });
  return max * min;
}

let nums = [4, 2];
console.log(solution(nums));
