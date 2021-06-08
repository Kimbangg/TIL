function solution(x) {
  var answer = true;
  var n = String(x)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));

  answer = x % n == 0 ? true : false;

  return answer;
}

let x = 12;
console.log(solution(x));
