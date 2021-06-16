function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = idx; i <= N; i++) {
    output.push(i);
    dfs(i, cnt + 1);
    output.pop();
  }
}

let result = "";
const output = [];
const [N, M] = [4, 2];
const nums = Array.from({ length: N }, (v, i) => i + 1);

dfs(1, 0);
console.log(result.trim());
