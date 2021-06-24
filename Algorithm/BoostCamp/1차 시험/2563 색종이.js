function solution() {
  let answer = 0;
  const board = Array.from(Array(101), () => Array(101).fill(0));

  for (let test = 0; test < n; test++) {
    const [x, y] = location[test];

    for (let i = x; i < x + 10; i++) {
      for (let j = y; j < y + 10; j++) {
        if (board[i][j] === 0) {
          board[i][j] = 1;
          answer += 1;
        }
      }
    }
  }
  console.log(answer);
}

const n = 3;

const location = [
  [3, 7],
  [15, 7],
  [5, 2],
];

solution();
