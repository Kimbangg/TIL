function flip(x, y) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      A[i][j] = 1 - A[i][j];
    }
  }
}

function checkEqual() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] !== B[i][j]) {
        return 0;
      }
    }
  }
  return 1;
}

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let count = 0;
const [N, M] = input[0].split(" ").map((e) => +e);
const A = input.splice(1, n).map((e) => e.split(""));
const B = input.splice(1, n).map((e) => e.split(""));

if (n < 3 || m < 3) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] !== B[i][j]) {
        console.log(-1);
        break;
      }
    }
  }
  console.log(count);
} else {
  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (A[i][j] !== B[i][j]) {
        flip(i, j);
        count += 1;
      }
    }
  }
}

let result = checkEqual ? count : -1;
console.log(result);
