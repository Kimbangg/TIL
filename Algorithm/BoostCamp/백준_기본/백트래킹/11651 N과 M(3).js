function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    output.push(i);
    dfs(output.length);
    output.pop();
  }
}

let result = "";
const [N, M] = [3, 3];
const output = [];

dfs(0);
console.log(result.trim());
