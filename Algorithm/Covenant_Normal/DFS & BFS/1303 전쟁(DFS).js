function isValidRange(row, col) {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
}

function DFS_White(row, col) {
  if (
    isValidRange(row, col) &&
    war[row][col] === "W" &&
    visited[row][col] === 0
  ) {
    visited[row][col] = 1;
    number += 1;

    for (let k = 0; k < 4; k++) {
      DFS_White(row + dx[k], col + dy[k]);
    }
  }
}

function DFS_Blue(row, col) {
  if (
    isValidRange(row, col) &&
    war[row][col] === "B" &&
    visited[row][col] === 0
  ) {
    visited[row][col] = 1;
    number += 1;

    for (let k = 0; k < 4; k++) {
      DFS_Blue(row + dx[k], col + dy[k]);
    }
  }
}

function solution() {
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (war[row][col] === "W" && visited[row][col] === 0) {
        DFS_White(row, col);
        white.push(Math.pow(number, 2));
        number = 0;
      } else if (war[row][col] === "B" && visited[row][col] === 0) {
        DFS_Blue(row, col);
        blue.push(Math.pow(number, 2));
        number = 0;
      }
    }
  }

  let me = white.reduce((acc, value) => acc + value);
  let enemy = blue.reduce((acc, value) => acc + value);
  console.log(me);
  console.log(enemy);
}

let war = [
  ["W", "B", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["B", "B", "B", "B", "B"],
  ["B", "B", "B", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

let visited = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let number = 0;
let N = war.length;
let white = [];
let blue = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

console.log(solution());
