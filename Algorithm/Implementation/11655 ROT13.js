const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];
const small_a = "a".charCodeAt(0);
const small_z = "z".charCodeAt(0);
const big_a = "A".charCodeAt(0);
const big_z = "Z".charCodeAt(0);
let result = "";

for (let i = 0; i < S.length; i++) {
  let s = S.charCodeAt(i);
  if (s >= small_a) {
    s = s + 13 > small_z ? s - 13 : s + 13;
  } else if (s >= big_a) {
    s = s + 13 > big_z ? s - 13 : s + 13;
  }
  result += String.fromCharCode(s);
}

console.log(result);
