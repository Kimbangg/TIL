const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const before = input[0];
const after = [];

for (let each of before) {
  let tmp = each.charCodeAt() - 3;
  tmp += tmp < 65 ? 26 : 0;
  after.push(String.fromCharCode(tmp));
}

console.log(after.join(""));
