function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(i + 1);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

let result = "";
const [N, M] = [4, 2];
const output = [];
const visited = Array(N).fill(0);
const nums = Array.from({ length: N }, (v, i) => i + 1);
dfs(0, 0);
console.log(result.trim());
