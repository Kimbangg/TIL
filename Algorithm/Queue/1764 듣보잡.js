const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function solution(hear, see) {
  const set = new Set();
  const result = [];

  hear.forEach((name) => {
    set.add(name);
  });

  see.forEach((name) => {
    if (set.has(name)) {
      result[result.length] = name;
    }
  });

  result.sort();

  return `${result.length}\n${result.join("\n")}`;
}

const [n, m] = input[0].split(" ").map(Number);
const hear = input.slice(1, n + 1);
const see = input.slice(-m);
const ans = solution(hear, see);

console.log(ans);
