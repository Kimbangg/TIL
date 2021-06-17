function solve() {
  nums.sort((a, b) => a - b);
  let sum = nums.pop();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] / 2;
  }
  console.log(sum);
}

let nums = [3, 2, 10, 9, 6];
solve();
