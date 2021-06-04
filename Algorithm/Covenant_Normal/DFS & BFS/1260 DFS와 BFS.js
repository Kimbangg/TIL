function DFS(V) {
  visited[V] = 1;

  for (let i = 0; i < M; i++) {
    if (!visited[i] && map[V][i] === 1) {
      dfsOut += " " + i;
      DFS(i);
    }
  }
}

function BFS(V) {
  visited[V] = 1;
  const queue = [V];
  while (queue.length) {
    const next = queue.shift();

    for (let i = 1; i <= N; i++) {
      if (map[next][i] === 1 && !visited[i]) {
        visited[i] = true;
        bfsOut += " " + i;
        queue.push(i);
      }
    }
  }
}

function setConnection(map, v1, v2) {
  map[v1][v2] = 1;
  map[v2][v1] = 1;
}

let [N, M, V] = [4, 5, 1];
let visited = Array(N + 1).fill(0);
const map = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));

const lines = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
];

for (let i = 0; i < M; i++) {
  setConnection(map, lines[i][0], lines[i][1]);
}

let dfsOut = "" + V;
DFS(V);
visited = visited.fill(0);
let bfsOut = "" + V;
BFS(V);

console.log(dfsOut);
console.log(bfsOut);
