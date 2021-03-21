function factorial(i) {
  if (i <= 1) {
    return 1;
  }
  return i * factorial(i - 1);
}

function run(tmpInput) {
  let n = tmpInput.split(" ")[0];
  let m = tmpInput.split(" ")[1];
  let result;
  if (n == m) {
    console.log(1);
    return;
  }
  result = factorial(m) / (factorial(n) * factorial(m - n));
  console.log(Math.round(result));
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let tc = input[0];

for (let i = 0; i < tc; i++) {
  run(input[i + 1]);
}
