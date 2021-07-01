function isValidRange(row, col) {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
}

function DFS(row, col) {
  if (
    isValidRange(row, col) === true &&
    map[row][col] === 1 &&
    visited[row][col] === 0
  ) {
    visited[row][col] = 1;
    number++;

    for (let k = 0; k < 4; k++) {
      DFS(row + dx[k], col + dy[k]);
    }
  }
}

function solution() {
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (map[row][col] === 1 && visited[row][col] === 0) {
        DFS(row, col);
        complex.push(number);
        number = 0;
      }
    }
  }
  complex.sort((a, b) => a - b);
  const answer = [complex.length, ...complex];
  console.log(answer.join("\n"));
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
