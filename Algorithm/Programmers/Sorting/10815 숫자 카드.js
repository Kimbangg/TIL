function solution(ele, idx) {
  let start = 0;
  let end = N - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (ele === have[mid]) {
      toCheck[idx] = 1;
      return;
    } else if (ele < have[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  toCheck[idx] = 0;
  return;
}

const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();

const have = input()
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    return a - b;
  });

const M = +input();

const toCheck = input().split(" ").map(Number);

toCheck.forEach((ele, idx) => solution(ele, idx));
console.log(toCheck.join(" "));
