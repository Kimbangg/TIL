let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let idx = 0;

function next() {
  return input[idx++];
}

function solve(n) {
  if (n == 1) {
    console.log("YES");
    return;
  }

  let tels = [];
  for (let i = 0; i < n; i++) {
    tels.push(next());
  }

  tels.sort();

  for (let i = 1; i < n; i++) {
    if (tels[i - 1] === tels[i].slice(0, tels[i - 1].length)) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}

let tc = Number(next());

while (tc--) {
  let n = Number(next());
  solve(n);
}
