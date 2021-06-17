function solve() {
  const loss = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);

  if (nums.length % 2 !== 0) loss.push(nums.pop());

  for (let i = 0; i < len / 2; i++) {
    loss.push(nums[i] + nums[len - i - 1]);
  }

  return Math.max(...loss);
}

let nums = [2, 9, 8, 3, 5, 6];
console.log(solve());
