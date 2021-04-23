let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input[0].split(" ").map((e) => +e);
let count = 0;
