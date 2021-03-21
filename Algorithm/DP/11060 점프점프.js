let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = parseInt(input[0]);
let cnt = 0;
let jump = [];
let dp = [];

for (let i = 1; i <= N; i++) {
  let tmpInput = input[i].split(" ");
  jump[i] = tmpInput[i];
}
