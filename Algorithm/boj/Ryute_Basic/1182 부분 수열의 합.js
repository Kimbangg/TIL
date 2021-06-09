function dfs(idx, sum) {
  if (idx >= n) {
    return;
  }

  sum += nums[idx];

  if (sum === target) {
    count += 1;
  }

  dfs(idx + 1, sum - nums[idx]);
  dfs(idx + 1, sum);
}

const [n, target] = [5, 0];
const nums = [-7, -3, -2, 5, 8];
let count = 0;
dfs(0, 0);
console.log(count);
