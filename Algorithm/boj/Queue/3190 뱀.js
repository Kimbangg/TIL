const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution() {}

let locations = [];
let move = [];
const [n, k] = input[0].split("\n").map(Number);

for (let i = 0; i < k; i++) {
  let [x, y] = input[i].split(" ");
  location.push([+x, +y]);
}

const L = Number(input[1]);

for (let j = 0; j < L; j++) {
  let [count, direction] = input[i].split(" ");
  move.push([+count, +direction]);
}
