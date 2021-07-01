let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = +input.shift();
let str = "";
const rev = (word) => Array.from(word).reverse().join("");

for (let i = 0; i < n; ++i) {
  let words = input[i].split(" ");
  str += words.map(rev).join(" ") + "\n";
}
console.log(str);
