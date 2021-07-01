let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split(" ");

let N = Number(input[0]);
let K = Number(input[1]);
let cnt = 0;
const cheNumArr = Array(N + 1).fill(true);

for (let i = 2; i <= N; i++) {
  for (let j = i; j <= N; j = j + i) {
    if (cheNumArr[j]) {
      compare(j);
      cheNumArr[j] = false;
    }
  }
}

function compare(idx) {
  cnt++;
  if (cnt === K) {
    console.log(idx);
    process.exit(0);
  }
}
