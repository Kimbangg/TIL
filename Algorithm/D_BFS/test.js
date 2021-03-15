const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  input = input.map((x) => x.split(" ").map(Number));
  const N = input[0][0];
  const M = input[0][1];
  const V = input[0][2];

  let matrix = Array(N + 1)
    .fill(0)
    .map((x) => Array(N + 1).fill(0));
  for (let i = 1; i < M + 1; i++) {
    let link = input[i];
    matrix[link[0]][link[1]] = 1;
    matrix[link[1]][link[0]] = 1;
  }
  function bfs(start) {
    visited = [start];
    queue = [start];
    while (queue.length > 0) {
      n = queue.shift();
      for (let i = 0; i < matrix[start].length; i++) {
        if (matrix[n][i] == 1 && !visited.includes(i)) {
          visited.push(i);
          queue.push(i);
        }
      }
    }
    return visited;
  }

  function dfs(start, visited) {
    visited.push(start);
    for (let i = 0; i < matrix[start].length; i++) {
      if (matrix[start][i] == 1 && !visited.includes(i)) {
        dfs(i, visited);
      }
    }
    return visited;
  }
  console.log(dfs(V, []).join(" "));
  console.log(bfs(V).join(" "));
});
