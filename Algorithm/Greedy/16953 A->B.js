let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = 0;
const [A, B] = input[0].split(" ").map((e) => +e);

while (A !== B) {
  count += 1;
}

console.log(count);

// 연산은 2가지만 가능하다
// 2를 곱하거나, 1을 뒤에 붙이거나
