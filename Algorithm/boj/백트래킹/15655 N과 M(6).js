function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(nums[i]);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = 0;
  }
}

let result = "";
const output = [];
const [N, M] = [4, 2];
const nums = [9, 8, 7, 1];
nums.sort((a, b) => a - b);
const visited = Array(N).fill(0);

dfs(0, 0);
console.log(result.trim());
