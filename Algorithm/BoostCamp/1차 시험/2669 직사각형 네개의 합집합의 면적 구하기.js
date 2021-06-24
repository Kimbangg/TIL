function solution() {
  let answer = 0;
  let board = Array.from(Array(101), () => Array(101).fill(0));

  for (let t = 0; t < 4; t++) {
    const [x1, y1, x2, y2] = location[t];

    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        if (board[i][j] === 0) {
          board[i][j] = 1;
          answer += 1;
        }
      }
    }
  }

  console.log(answer);
}

const location = [
  [1, 2, 4, 4],
  [2, 3, 5, 7],
  [3, 1, 6, 5],
  [7, 3, 8, 6],
];
solution();
