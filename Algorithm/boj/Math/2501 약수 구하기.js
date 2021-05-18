let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, k] = inputs[0].split(" ").map((e) => Number(e));

let arr = [];
for (let i = 1; i <= n; i++) {
  n % i === 0 && arr.push(i);
}

console.log(arr[k - 1] ? arr[k - 1] : 0);
