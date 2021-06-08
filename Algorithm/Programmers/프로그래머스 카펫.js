function isValid(row, col) {
  col = col + 2;
  let sum = row * 2 + col * 2;

  if (sum === brown) {
    return true;
  }

  return false;
}

function solution(brown, yellow) {
  const answer = [];

  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      console.log(i);
      let row = i;
      let col = yellow / i;

      if (isValid(row, col)) {
        answer.push(col + 2, row + 2);
        break;
      }
    }
  }

  return answer;
}

let brown = 24;
let yellow = 24;
console.log(solution(brown, yellow));
