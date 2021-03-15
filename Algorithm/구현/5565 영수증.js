const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let cost = Number(input[0]);

for (let i = 0; i <= 9; i++) {
  const each = Number(input[i]);
  cons -= each;
}

console.log(cost);
