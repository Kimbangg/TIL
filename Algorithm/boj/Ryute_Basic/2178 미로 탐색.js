function BFS(row, col) {
  const queue = [row, col];

  while (queue.length) {
    row = queue.shift();
    col = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = row + dx[i];
      let ny = col + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      if (maze[nx][ny] === 1 && visited[nx][ny] === 0) {
        maze[nx][ny] = maze[row][col] + 1;
        queue.push(nx, ny);
      }
    }
  }
}

function solution() {
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (maze[row][col] === 1) {
        BFS(row, col);
        break;
      }
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let [n, m] = [4, 6];

let maze = [
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
];

let visited = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

console.log(solution());
