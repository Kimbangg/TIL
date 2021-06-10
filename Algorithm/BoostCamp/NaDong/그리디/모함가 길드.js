function solution() {
  nums = nums.sort((a, b) => a - b);
  let answer = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += 1;

    if (count >= nums[i]) {
      answer += 1;
      count = 0;
    }
  }
  return answer;
}

let nums = [2, 3, 1, 2, 2];
console.log(solution());
