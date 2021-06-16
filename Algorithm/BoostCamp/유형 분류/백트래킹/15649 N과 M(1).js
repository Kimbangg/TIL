function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(i);
    dfs(cnt + 1);
    output.pop();
    visited[i] = 0;
  }
}

let result = "";
const output = [];
const [N, M] = [3, 2];
const nums = Array.from({ length: N }, (v, i) => i + 1);
const visited = Array(N).fill(0);

dfs(0);
console.log(result.trim());
