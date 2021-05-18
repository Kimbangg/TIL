function solution(absolutes, signs) {
  let answer = 0;

  signs.forEach((sign, index) => {
    if (sign === false) {
      answer += -absolutes[index];
    } else {
      answer += absolutes[index];
    }
  });

  return answer;
}

let absolutes = [4, 7, 12];
let signs = [true, false, true];

console.log(solution(absolutes, signs));
