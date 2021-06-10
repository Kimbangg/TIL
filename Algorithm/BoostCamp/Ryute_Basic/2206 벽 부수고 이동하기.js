function BFS(row, col) {
  const queue = [row, col, 0];

  while (queue.length) {
    row = queue.shift();
    col = queue.shift();
    checkPunch = queue.shift();

    for (let i = 0; i < 4; i++) {
      punch--;
      let nx = row + dx[i];
      let ny = col + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      if (maze[nx][ny] === 0 && visited[nx][ny] === 0) {
        maze[nx][ny] = maze[row][col] + 1;
        queue.push(nx, ny, 1);
      } else if (
        maze[nx][ny] === 1 &&
        visited[nx][ny] === 0 &&
        checkPunch === 0
      ) {
        maze[nx][ny] = maze[row][col] + 1;
        queue.push(nx, ny, 1);
      }
    }
  }
  console.log(maze[n - 1][m - 1] + 1);
}

function solution() {
  BFS(0, 0);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let [n, m] = [6, 4];

let maze = [
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 0],
];

const visited = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let punch = 4;
console.log(solution());

// let punch = 1;
