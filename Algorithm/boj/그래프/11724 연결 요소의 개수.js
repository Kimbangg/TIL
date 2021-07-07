function makeConnection(row, col) {
  row = row - 1;
  col = col - 1;

  map[row][col] = 1;
  map[col][row] = 1;
}

function DFS(index, visited, map) {
  visited[index] = 1;

  for (let i = 0; i < map.length; i++) {
    if (map[index][i] === 1 && !visited[i]) {
      DFS(i, visited, map);
    }
  }
}

function solve() {
  let answer = 0;

  for (let i = 0; i < lines.length; i++) {
    const [row, col] = lines[i];
    makeConnection(row, col);
  }

  for (let i = 0; i < map.length; i++) {
    if (!visited[i]) {
      DFS(i, visited, map);
      answer += 1;
    }
  }
  console.log(answer);
}

const [N, M] = [6, 5];

const lines = [
  [1, 2],
  [2, 5],
  [5, 1],
  [3, 4],
  [4, 6],
];

const map = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

const visited = Array(N).fill(false);

solve();
