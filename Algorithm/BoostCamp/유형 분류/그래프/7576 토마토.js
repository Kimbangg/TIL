function BFS(x, y) {
  const queue = [x, y];

  while (queue.length) {
    visited[x][y] = 1;

    x = queue.shift();
    y = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      //
      if (nx < 0 || ny < 0 || nx >= m || ny >= n) {
        continue;
      }

      if (farm[nx][ny] === 0 && visited[nx][ny] === 0) {
        farm[nx][ny] = farm[x][y] + 1;
        queue.push(nx, ny);
      }
    }
  }
}

function solve() {
  for (let row = 0; row < farm.length; row++) {
    for (let col = 0; col < farm[row].length; col++) {
      if (farm[row][col] === 1) {
        BFS(row, col);
        break;
      }
    }
  }
  console.log(farm);
}

const [n, m] = [6, 4];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const farm = [
  [1, -1, 0, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1],
];

const visited = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

console.log(solve());
