function filp(x, y) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      unchanged[x][y] = 1 - unchanged[x][y];
    }
  }
}

function checkEqual() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (unchanged[i][j] !== forChanged[i][j]) {
        return 0;
      }
    }
  }
  return 1;
}

function solve() {
  let count = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (unchanged[i][j] !== forChanged[i][j]) {
        filp(i, j);
        count += 1;
      }
    }
  }

  if (checkEqual()) {
    return count;
  } else {
    return -1;
  }
}

const [N, M] = [3, 4];

const unchanged = [
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
];

const forChanged = [
  [1, 0, 0, 1],
  [1, 0, 1, 1],
  [1, 0, 0, 1],
];

solve();
