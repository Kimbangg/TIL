function swapRowLocation(candy, row, col) {
  let tmp = candy[row][col];
  candy[row][col] = candy[row + 1][col];
  candy[row + 1][col] = tmp;
}

function swapColLocation(candy, row, col) {
  let tmp = candy[row][col];
  candy[row][col] = candy[row][col + 1];
  candy[row][col + 1] = tmp;
}

function checkPoint(candy) {
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    let cnt_row = 1;
    let cnt_col = 1;

    for (let j = 0; j < n - 1; j++) {
      if (candy[i][j] === candy[i][j + 1]) {
        cnt_row += 1;
      } else {
        cnt = Math.max(cnt, cnt_row);
        cnt_row = 1;
      }

      if (candy[j][i] === candy[j + 1][i]) {
        cnt_col += 1;
      } else {
        cnt = Math.max(cnt, cnt_col);
        cnt_col = 1;
      }
    }
    cnt = Math.max(cnt, cnt_row, cnt_col);
  }

  return cnt;
}

function solve() {
  let answer = -Infinity;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (candy[i][j] !== candy[i + 1][j]) {
        swapRowLocation(candy, i, j);
        answer = Math.max(answer, checkPoint(candy));
        swapRowLocation(candy, i, j);
      }

      if (candy[i][j] !== candy[i][j + 1]) {
        swapColLocation(candy, i, j);
        answer = Math.max(answer, checkPoint(candy));
        swapColLocation(candy, i, j);
      }
    }
  }
  console.log(answer);
}

const n = 5;

const candy = [
  ["Y", "C", "P", "Z", "Y"],
  ["C", "Y", "Z", "Z", "P"],
  ["C", "C", "P", "P", "P"],
  ["Y", "C", "Y", "Z", "C"],
  ["C", "P", "P", "Z", "Z"],
];

solve();
