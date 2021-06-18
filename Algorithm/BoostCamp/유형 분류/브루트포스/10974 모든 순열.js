function dfs(cnt, nums, visited, output, result) {
  if (cnt === n) {
    result.push(output.join(""));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(i);
    dfs(cnt + 1, nums, visited, output, result);
    output.pop();
    visited[i] = 0;
  }
  return result;
}

function solve(n) {
  const nums = Array.from({ length: n }, (v, i) => i + 1);
  const visited = Array(n).fill(0);
  const output = [];
  const result = [];
  dfs(0, nums, visited, output, result);

  for (let i = 0; i < result.length; i++) {
    console.log(result[i].split("").join(" "));
  }
}

const n = 3;
solve(n);
