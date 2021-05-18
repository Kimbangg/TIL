let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = parseInt(input[0].split(" ")[0]);
let X = parseInt(input[0].split(" ")[1]);
let list = input[1].split(" ");

list = list.map(function (v) {
  return parseInt(v);
});

let result = [];
for (let i = 0; i < N; i++) {
  if (list[i] < X) {
    result.push(list[i]);
  }
}

console.log(result.join(" "));
