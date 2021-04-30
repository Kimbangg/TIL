// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// input.shift();

let input = ["but", "hie"];

input.sort((a, b) => {
  // 길이가 같으면, 사전 순서대로
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
  return a.length - b.length;
});

// 중복제거
const answer = [...new Set(input)];

// console.log(answer.join("\n"));
