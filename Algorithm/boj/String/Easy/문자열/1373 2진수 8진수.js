let fs = require("fs");
let input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let x = input[0].split("");

let ans = [];
while (x.length) {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    let tmp = parseInt(x.pop());
    if (!tmp) continue;
    result += 1 << i;
  }
  ans.push(result);
}
console.log(ans.reverse().join(""));
