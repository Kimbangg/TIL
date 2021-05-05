let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("");

input.sort(function (a, b) {
  return b - a;
});

console.log(input.join(""));
