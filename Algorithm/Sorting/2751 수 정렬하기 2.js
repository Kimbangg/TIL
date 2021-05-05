let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let arr = input.split("\n").map(Number);
arr.shift();

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
