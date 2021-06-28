function isVaildRange(x, y) {
  if (x < 0 || y < 0 || x >= space.length || y >= space.length) {
    return false;
  }

  return true;
}

function DFS(x, y) {
  visited[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (isVaildRange(nx, ny) && space[nx][ny] > target && !visited[nx][ny]) {
      DFS(nx, ny);
    }
  }
}

function solution() {
  let answer = 0;

  for (let row = 0; row < space.length; row++) {
    for (let col = 0; col < space.length; col++) {
      if (space[row][col] > target && !visited[row][col]) {
        DFS(row, col);
        answer += 1;
      }
    }
  }
  console.log(answer);
}

const target = 5;
const n = 5;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const visited = Array.from(Array(n), () => Array(n).fill(0));

const space = [
  [6, 8, 2, 6, 2],
  [3, 2, 3, 4, 6],
  [6, 7, 3, 3, 2],
  [7, 2, 5, 3, 6],
  [8, 9, 5, 2, 7],
];

solution();
