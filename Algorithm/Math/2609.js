function solution() {
  let a = A;
  let b = B;

  while (b > 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  console.log(a);
  console.log((A * B) / a);
}

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const [A, B] = input.split(" ").map((c) => +c);
solution();
