function solution() {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].split("");
    let target = nums[i][0];
    let max = 0;
    let count = 0;
    for (let j = 0; j < nums[i].length - 1; j++) {
      if (target !== nums[i][j + 1]) {
        target = nums[i][j + 1];
        count = 1;
      } else {
        count += 1;
      }
      if (max < count) {
        max = count;
      }
    }
    answer.push(max);
  }
  return answer;
}

let nums = ["12345123", "17772345", "22233331"];
console.log(solution());
