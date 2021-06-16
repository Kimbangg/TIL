function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  // 1로 시작한 백트래킹이 끝나면,
  // 2's 시작점 -> 2이 시작점인 백트래킹의 시작점 : 2
  // 3's 시작점 -> 3이 시작점인 백트래킹의 시작점 : 3
  for (let i = idx; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(i);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = 0;
  }
}

let result = "";
const output = [];
const [N, M] = [4, 2];
const nums = Array.from({ length: N }, (v, i) => i + 1);
const visited = Array(N).fill(0);

dfs(1, 0);
console.log(result.trim());
