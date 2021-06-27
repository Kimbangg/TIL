function solution() {
  let sum = 0;
  let end = 0;
  const len = nums.length;

  for (let start = 0; start < nums.length; start++) {
    while (end < len && sum < target) {
      sum += nums[end];
      end += 1;
    }

    if (sum === target) {
      console.log(target);
      break;
    }

    sum -= nums[start];
  }
}

const [n, target] = [5, 21];
const nums = [5, 6, 7, 8, 9];
solution();
