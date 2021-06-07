function setConnection(map, x, y) {
  map[x][y] = 1;
  map[y][x] = 1;
}

function DFS(V) {
  visited[V] = 1;

  for (let i = 0; i < N; i++) {
    if (map[V][i] === 1 && !visited[i]) {
      DFS(i);
    }
  }
}

function solution() {
  for (let i = 0; i < lines.length; i++) {
    const [x, y] = lines[i];
    setConnection(map, x, y);
  }

  DFS(1);
  console.log(visited.filter((each) => each).length - 1);
}

const [N, M] = [7, 6];

const map = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));
const visited = new Array(N + 1).fill(false);

const lines = [
  [1, 2],
  [2, 3],
  [1, 5],
  [5, 2],
  [5, 6],
  [4, 7],
];

solution();
