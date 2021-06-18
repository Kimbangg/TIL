function isValidRange(row, col) {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
}

function DFS(row, col) {
  if (isValidRange(row, col) && map[row][col] === 1 && !visited[row][col]) {
    visited[row][col] = 1;
    number++;
  }

  for (let k = 0; k < 4; k++) {
    DFS(row + dx[k], col + dy[k]);
  }
}

function solution() {
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map.length; col++) {
      DFS(row, col);
      complex.push(number);
      number;
    }
  }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const complex = [];
let number = 0;

let map = [
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
];

let visited = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let N = map.length;

solution();
