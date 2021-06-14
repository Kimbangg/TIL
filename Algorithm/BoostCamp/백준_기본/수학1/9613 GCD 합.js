function getGCD(x, y) {
  while (y > 0) {
    let tmp = x % y;
    x = y;
    y = tmp;
  }

  return x;
}

function dfs(idx, cnt) {
  if (cnt === 2) {
    let gcdValue = getGCD(nums[output[0] - 1], nums[output[1] - 1]);
    sum += gcdValue;
    return;
  }

  for (let i = idx; i < nums.length; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

let sum = 0;
const output = [];
const nums = [4, 10, 20, 30, 40];
const visited = Array(nums.length).fill(0);
dfs(0, 0);
console.log(sum);
