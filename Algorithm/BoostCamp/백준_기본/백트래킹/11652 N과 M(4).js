function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    output.push(i + 1);
    dfs(i, cnt + 1);
    output.pop();
  }
}

let result = "";
const [N, M] = [3, 3];
const visited = new Array(N);
const output = [];

dfs(0, 0);
console.log(result);
