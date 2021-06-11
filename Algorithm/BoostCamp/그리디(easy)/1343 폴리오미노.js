function solve() {
  board = board.replace("XXXX", "AAAA");
  board = board.replace("XX", "BB");

  if (board.includes("X")) {
    return -1;
  } else {
    return board;
  }
}

let board = "XXXX....XXX.....XX";

console.log(solve());

// function solve() {
//   board = board.split(".");

//   for (let i = 0; i < board.length; i++) {
//     let length = board[i].length;

//     if ((board[i].length % 4) % 2 !== 0) {
//       return -1;
//     }

//     const first = Math.floor(board[i].length / 4);
//     const second = Math.floor((board[i].length % 4) / 2);

//     board[i] = "AAAA".repeat(first) + "BB".repeat(second);
//   }

//   return board.join(".");
// }
