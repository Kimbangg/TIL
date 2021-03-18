let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let line = input[i].split(" ");
  let L = line[0],
    P = line[1],
    V = line[2];

  if (L === "0" && P === "0" && V === "0") break;

  let ans;

  ans = parseInt(parseInt(V / P) * L + Math.min(V % P, L));

  console.log("Case " + (i + 1) + ": " + ans);
}
