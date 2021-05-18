function solution(board, moves) {
  let basket = [];
  let answer = 0;
  moves.forEach((value) => {
    const doll = pickUp(board, value - 1);
    console.log(doll);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  function pickUp(board, index) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][index]) {
        const doll = board[i][index];
        board[i][index] = 0;
        return doll;
      }
    }
  }
  return answer;
}
