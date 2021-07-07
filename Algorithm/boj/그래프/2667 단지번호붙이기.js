function isValidRange(row, col) {
  if (row < 0 || col < 0 || row >= n || col >= n) {
    return false;
  }

  return true;
}

function DFS(x, y) {
  cnt += 1;
  visited[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    nx = x + dx[i];
    ny = y + dy[i];

    if (!isValidRange(nx, ny)) {
      continue;
    }

    if (map[nx][ny] === 1 && visited[nx][ny] === 0) {
      DFS(nx, ny);
    }
  }
}

function solve() {
  const answer = [];
  console.log(n);
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (map[row][col] === 1) {
        cnt = 0;
        DFS(row, col);
      }
    }
    answer.push(cnt);
  }
  console.log(answer);
}

const n = 7;
let count = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const map = [
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
];

const visited = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

solve();
