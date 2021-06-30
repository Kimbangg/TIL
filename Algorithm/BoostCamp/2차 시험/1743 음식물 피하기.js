// 주어진 좌표를 바탕으로 커넥션을 해주는 함수
function makeConnection(map, x, y) {
  map[x][y] = 1;
  map[y][x] = 1;

  return map;
}

function dfs(x, y) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  visited[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
  }
}

function solution() {
  let answer = -Infinity;

  // 주어진 좌표를 통해 인접 행렬을 만드는 루프
  for (let i = 0; i < location.length; i++) {
    const [x, y] = location[i];
    makeConnection(map, x - 1, y - 1);
  }

  for (let row = 0; row < width.length; row++) {
    for (let col = 0; col < width[row].length; col++) {
      if (map[row][col] === 1 && !visited[row][col]) {
        let count = dfs(row, col);
        answer = Math.max(answer, count);
      }
    }
  }
}

// n 세로 길이, m 가로 길이
const [height, width, k] = [3, 4, 5];

const location = [
  [3, 2],
  [2, 2],
  [3, 1],
  [2, 3],
  [1, 1],
];

const map = Array.from(Array(height), () => Array(width).fill(0));
const visited = map.slice();

solution();
