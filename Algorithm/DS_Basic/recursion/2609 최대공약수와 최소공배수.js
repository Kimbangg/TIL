function solution() {
  let a = A;
  let b = B;

  // 1112 % 695 = 417
  // 695 % 417 = 278
  // 417 % 278 = 139
  // 287 % 139 = 0
  // a = 139  b = 0 이 될 때 종료.
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
solution();
