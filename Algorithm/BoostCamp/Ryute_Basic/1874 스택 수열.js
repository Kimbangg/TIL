function solution() {
  let index = 1;
  let answer = "";
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    let tmp = nums[i];

    while (index <= tmp) {
      stack.push(index++);
      answer += "+\n";
    }

    if (stack[stack.length - 1] === tmp) {
      stack.pop();
      answer += "-\n";
    } else {
      answer = "NO";
      break;
    }
  }
  console.log(answer);
}

let nums = [4, 3, 6, 8, 7, 5, 2, 1];
solution(nums);
