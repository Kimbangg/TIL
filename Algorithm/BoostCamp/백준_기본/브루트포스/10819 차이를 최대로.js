function dfs(cnt) {
  if (cnt === n) {
    permu_arr.push(output.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(nums[i]);
    dfs(cnt + 1);
    output.pop();
    visited[i] = 0;
  }
}

function solve() {
  let answer = -Infinity;

  for (let i = 0; i < permu_arr.length; i++) {
    let sum = 0;
    permu_arr[i] = permu_arr[i].split(" ");

    for (let j = 1; j < n; j++) {
      sum += Math.abs(permu_arr[i][j] - permu_arr[i][j - 1]);
    }

    answer < sum ? (answer = sum) : answer;
  }
  console.log(answer);
}

const n = 6;
const output = [];
const permu_arr = [];
const nums = [20, 1, 15, 8, 4, 10];
const visited = Array(n).fill(0);
dfs(0);
solve();
