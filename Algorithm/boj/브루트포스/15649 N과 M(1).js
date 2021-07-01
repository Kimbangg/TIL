function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i] === 1) continue;

    visited[i] = 1;
    output.push(i);
    dfs(cnt + 1);

    output.pop(); // 1 -> 2 -> 3 -> 4
    visited[i] = 0;
  }
}

let result = "";
const [N, M] = [4, 3];
const visited = Array(N + 1).fill(0);
const output = [];

dfs(0);
console.log(result.trim());
