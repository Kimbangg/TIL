function solution(board) {
  let minimum = 64;

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let typeB = 0;
      let typeW = 0;
      for (let k = i; k < i + 8; k++) {
        for (let l = j; l < j + 8; l++) {
          if ((k + l) % 2 === 0) {
            if (board[k][l] === "W") {
              typeB++;
            } else {
              typeW++;
            }
          } else {
            if (board[k][l] === "B") {
              typeB++;
            } else {
              typeW++;
            }
          }
        }
      }
      if (minimum > typeB) minimum = typeB;
      if (minimum > typeW) minimum = typeW;
    }
  }
  console.log(minimum);
}

let [N, M] = [10, 13];

let board = [
  ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B", "W"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "B", "W", "B", "W", "B"],
  ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "B", "W", "B"],
  ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "B", "W", "B"],
];

solution(board);
