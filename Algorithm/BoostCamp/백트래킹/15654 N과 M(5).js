function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(nums[i]);
    dfs(cnt + 1);
    output.pop();
    visited[i] = 0;
  }
}

let result = "";
const output = [];
const [N, M] = [4, 4];
const nums = [1231, 1232, 1233, 1234];
nums.sort((a, b) => a - b);
const visited = Array(N).fill(0);

dfs(0);
console.log(result.trim());
