function isValidRange(row, col) {
  if (row < 0 || col < 0 || row >= n || col >= m) {
    return false;
  }

  return true;
}

function DFS(x, y) {
  visited[x][y] = 1;

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = x + dy[i];

    if (!isValidRange(nx, ny)) {
      continue;
    }

    if (island[nx][ny] === 1 && !visited[nx][ny]) {
      DFS(nx, ny);
    }
  }
}

function solve() {
  let answer = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (island[row][col] === 1 && !visited[row][col]) {
        DFS(row, col);
        answer += 1;
      }
    }
  }

  return answer;
}

const dx = [-1, 1, 0, 0, -1, 1];
const dy = [0, 0, -1, 1, -1, 1];

const [n, m] = [2, 2];
const island = [
  [0, 1],
  [1, 0],
];

const visited = [
  [0, 0],
  [0, 0],
];

console.log(solve());

// 대각선 이라는 것은
//  [1,1] [1,2] [1,3]
//  [2,1] [2,2] [2,3]
//  [3,1] [3,2] [3,3]

// [-1, -1], [-1, 1]
// [1, -1], [1,1]

// dx [ -1, 1, 0, 0, -1, 1 ]
// dy [ 0, 0, -1, 1, -1, 1 ]
