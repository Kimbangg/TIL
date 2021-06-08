function solution(num) {
  var answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      return -1;
    }
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return answer;
}

let n = 6;
console.log(solution(n));
