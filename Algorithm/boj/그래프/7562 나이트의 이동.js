function isValidRange(row, col) {
  if (row < 0 || col < 0 || row >= n || col >= n) {
    return false;
  }

  return true;
}

function BFS(x, y) {
  const queue = [x, y];

  while (queue.length) {
    x = queue.shift();
    y = queue.shift();

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (!isValidRange(nx, ny)) {
        continue;
      }

      if (board[nx][ny] === 0) {
        board[nx][ny] = board[x][y] + 1;
        queue.push(nx, ny);
      }
    }
  }
}

const [sx, sy] = [0, 0];
const [ex, ey] = [7, 0];

const dx = [1, 1, 2, 2, -1, -1, -2, -2];
const dy = [-2, 2, -1, 1, -2, 2, -1, 1];

const n = 8;

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

board[sx][sy] = 0;

BFS(sx, sy);
console.log(board[ex][ey]);
