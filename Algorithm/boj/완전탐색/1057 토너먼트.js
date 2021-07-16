function solution(J, H) {
  let roundCount = 0;

  while (J != H) {
    J = Math.ceil(J / 2);
    H = Math.ceil(H / 2);
    roundCount++;
  }

  return roundCount;
}

let fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
console.log(solution(parseInt(input[1]), parseInt(input[2])));
