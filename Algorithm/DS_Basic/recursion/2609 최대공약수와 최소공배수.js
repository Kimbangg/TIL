function solution(A, B) {
  let a = A;
  let b = B;

  while (b > 0) {
    let tmp = a % b;
    a = b;
    b = tmp;
  }

  console.log(a);
  console.log((A * B) / a);
}

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const [A, B] = input.split(" ").map((c) => +c);
const gcdNumber = solution(A, B);

console.log(gcdNumber);
console.log((A * B) / gcdNumber);
