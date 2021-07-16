const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift(); //
const KgCmTable = input.map((KgCm) =>
  KgCm.split(" ").map((num) => parseInt(num))
);

const rank = [];

for (let i = 0; i < T; i++) {
  let count = 0;
  for (let j = 0; j < T; j++) {
    if (i !== j) {
      if (
        KgCmTable[i][0] < KgCmTable[j][0] &&
        KgCmTable[i][1] < KgCmTable[j][1]
      ) {
        count++;
      }
    }
  }
  rank.push(count + 1);
}

console.log(rank.join(" "));
