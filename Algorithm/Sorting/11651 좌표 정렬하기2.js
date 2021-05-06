function solution() {
  let str = "";
  input
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    })
    .forEach((arr) => (str += `${arr[0]} ${arr[1]}\n`));
  console.log(str);
}

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
input = input.map((e) => e.split(" ").map((e) => parseInt(e, 10)));
solution();
