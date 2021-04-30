const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const N = +input.shift();
const age = input.slice(0, N).map((x) => x.split(" "));

age.sort(function (a, b) {
  // 나이가 같으면, 알파벳 순서대로
  if (a[0] === b[0]) {
    return a[1] > b[1] ? 1 : -1;
  }
  // 나이 순서대로
  return a[0] - b[0];
});

console.log(age.join("\n"));
