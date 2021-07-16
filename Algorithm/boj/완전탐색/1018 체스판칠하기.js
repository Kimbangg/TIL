let fs = require("fs");
let inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(/\r\n|\r|\n/);

let N = parseInt(inputData[0].split(" ")[0]);
let M = parseInt(inputData[0].split(" ")[1]);
let board = [];

for (let i = 1; i <= N; i++) {
  board.push(inputData[i].split(""));
}

let minimum = 64;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let typeA = 0; // 왼쪽 상단이 white로 시작하는 것
    let typeB = 0; // 왼쪽 상단이 black으로 시작하는 것
    for (let k = i; k < i + 8; k++) {
      for (let l = j; l < j + 8; l++) {
        if ((k + l) % 2 === 0) {
          // 홀수 자리 ( 0, 0 ) ( 0, 2 ) (1,1 ) 등등이
          if (board[k][l] === "W") {
            //  white 라면, 좌측 상단이 백색으로 시작하는 것이고
            typeA++;
          } else {
            // 만약 B 라면, 좌측 상단이 검은색으로 시작하는 것이다.
            typeB++;
          }
        } else {
          if (board[k][l] === "B") {
            typeA++;
          } else {
            typeB++;
          }
        }
      }
    }
    if (minimum > typeA) minimum = typeA;
    if (minimum > typeB) minimum = typeB;
    // A 유형의 체스판에서 B 유형의 체스판 값이 올라 갔다는 것은
    // 내가 만들고자 하는 체스판과 다른 것 즉, 틀린 것이기 때문에
    // 결국 B는 유형과 다른 색깔의 개수를 의미한다.
  }
}
console.log(minimum);
