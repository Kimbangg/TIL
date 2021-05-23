function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

let left = 13;
let right = 17;
console.log(solution(left, right));
