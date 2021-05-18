var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(/[\n|:blank:|\t|\s]/);

let T = +input[0];
if (T % 10 !== 0) {
  console.log(-1);
  return;
}
let A = 300; // 60 * 5
let B = 60;
let C = 10;

let answer = [];
answer.push(Math.floor(T / A));
T -= A * answer[0];
answer.push(Math.floor(T / B));
T -= B * answer[1];
answer.push(Math.floor(T / C));
console.log(answer.join(" "));
