let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split(" ");

let N = parseInt(input[0]);
let M = parseInt(input[1]);
let K = parseInt(input[2]);
let count = 0;

while (N >= 2 && M >= 1 && N + M >= K + 3) {
  N -= 2;
  M -= 1;
  count += 1;
}
c;
console.log(count);
