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
const output = [];
const [N, M] = [4, 2];
const nums = Array.from({ length: N }, (v, i) => i + 1);

dfs(0);
console.log(result.trim());
