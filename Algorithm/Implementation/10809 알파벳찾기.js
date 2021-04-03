const input = require("fs").readFileSync("/dev/stdin").toString();
const result = [];

for (let i = 0; i < 26; i++) {
  result[i] = input.indexOf(String.fromCharCode(i + 97));
}

console.log(result.join(" "));
