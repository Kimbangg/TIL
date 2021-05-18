let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();

var N = Number(input);
var cnt = 0;

while (true) {
  if (N % 5 == 0) {
    cnt += N / 5;
    break;
  } else if (N < 3) {
    cnt = -1;
    break;
  }s
  N -= 3;
  cnt++;
}
console.log(cnt);
