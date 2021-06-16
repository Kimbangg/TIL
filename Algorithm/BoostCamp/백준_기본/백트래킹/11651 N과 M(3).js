function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    output.push(i);
    dfs(cnt + 1);
    output.pop();
  }
}

let result = "";
const [N, M] = [3, 2];
const output = [];

dfs(0);
console.log(result.trim());
