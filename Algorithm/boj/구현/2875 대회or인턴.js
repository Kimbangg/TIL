let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split(" ");

let N = parseInt(input[0]);
let M = parseInt(input[1]);
let K = parseInt(input[2]);
let count = 0;

while (N >= 2 && M >= 1 && N + M >= K + 3) {
  // K+3가 N+M 보다 크다는 것은, 여학생 2 / 남학생 1명을 추가 배정하고도
  // 인턴을 보낼 K만큼의 자리가 있다는 것을 의미한다
  N -= 2;
  M -= 1;
  count += 1;
}
c;
console.log(count);
