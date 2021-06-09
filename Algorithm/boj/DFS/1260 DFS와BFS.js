const lines = readInputLines();
const [N, M, V] = splitAndParseInt(lines[0]);
let visited = new Array(N + 1).fill(false);
const map = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= M; ++i) {
  const [v1, v2] = splitAndParseInt(lines[i]);
  setConnection(map, v1, v2);
}

function readInputLines() {
  return require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
}

function splitAndParseInt(string) {
  return string.split(" ").map((value) => parseInt(value));
}

function setConnection(map, v1, v2) {
  map[v1][v2] = 1;
  map[v2][v1] = 1;
}

let dfsOut = "" + V;
function DFS(V) {
  visited[V] = true;
  for (let i = 1; i <= N; i++) {
    if (map[V][i] === 1 && !visited[i]) {
      dfsOut += " " + i;
      DFS(i);
    }
  }
}

let bfsOut = "" + V;
function BFS(V) {
  visited[V] = true;
  const queue = [V];
  while (queue.length !== 0) {
    const nextV = queue.shift();
    for (let i = 1; i <= N; i++) {
      if (map[nextV][i] === 1 && !visited[i]) {
        visited[i] = true;
        bfsOut += " " + i;
        queue.push(i);
      }
    }
  }
}

DFS(V);
visited = visited.fill(false);
BFS(V);

console.log(dfsOut);
console.log(bfsOut);
