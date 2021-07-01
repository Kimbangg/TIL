const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const num = Array(26).fill(0);
const a = "a".charCodeAt(0);
for (const c of input) {
  num[c.charCodeAt(0) - a]++;
}
console.log(num.join(" "));
