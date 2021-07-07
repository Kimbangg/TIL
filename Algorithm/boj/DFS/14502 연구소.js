function bfs() {
  const copy_map = map.slice();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (copy_map[i][j] === 2) {
        const queue = [i, j];
      }
    }
  }

  while (queue.length) {
    let x = queue.shift();
    let y = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
    }

    if (0 <= nx < n && 0 <= ny < m) {
      if (map[nx][ny] === 0) {
        map[nx][ny] = 2;
        queue.push(nx, ny);
      }
    }
  }

  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (copy_map[i][j] === 0) cnt += 1;
    }
  }

  ans = Math.max(ans, cnt);
}

function backTracking(cnt) {
  if (cnt === 3) {
    bfs();
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0) {
        map[i][j] = 1;
        backTracking(cnt + 1);
        map[i][j] = 0;
      }
    }
  }
}

let ans = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const [n, m] = [4, 6];

const map = [
  [1, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 2],
  [1, 1, 1, 0, 0, 2],
  [0, 0, 0, 1, 0, 2],
];
