let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();

let N = Number(input);
let cnt = 0;

while (N) {
  if (N % 5 === 0) {
    cnt += N / 5;
    break;
  } else if (N < 3) {
    cnt = -1;
    break;
  }
  N -= 3;
  cnt += 1;
}

console.log(cnt);
