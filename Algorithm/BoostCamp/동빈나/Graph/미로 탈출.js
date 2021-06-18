function BFS(x, y) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [x, y];

  while (queue) {
    x = queue.shift();
    y = queue.shift();

    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
        continue;
      }

      if (maze[nx][ny] === 0) {
        continue;
      }

      if (maze[nx][ny] === 1) {
        maze[nx][ny] = maze[nx][ny] + 1;
        queue.push(nx, ny);
      }
    }
  }
  return maze[n - 1][m - 1];
}

let [N, M] = [3, 3];

let maze = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 1, 1],
];

console.log(BFS(0, 0));
