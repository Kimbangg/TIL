const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let not = [];
let tall = input[0]
  .split("\n")
  .map((num) => +num)
  .sort((a, b) => a - b);

for (let i = 0; i < tall.length; i++) {
  sum += tall[i];
}

for (let i = 0; i < tall.length - 1; i++) {
  for (let j = i + 1; j < tall.length; j++) {
    if (sum - (tall[i] + tall[j]) === 100) {
      not[0] = tall[i];
      not[1] = tall[j];
    }
  }
}

for (let i = 0; i < tall.length; i++) {
  if (tall[i] !== not[0] && tall[i] !== not[1]) {
    console.log(tall[i]);
  }
}
