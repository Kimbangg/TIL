function clickZero() {
  before = tmp;
  let count = 1;
  before[0] = String(1 - Number(before[0]));
  before[1] = String(1 - Number(before[1]));

  for (let i = 1; i < before.length; i++) {
    if (before[i - 1] === after[i - 1]) {
      continue;
    } else {
      count += 1;

      before[i - 1] = String(1 - Number(before[i - 1]));
      before[i] = String(1 - Number(before[i]));

      if (i < before.length - 1) {
        before[i + 1] = String(1 - Number(before[i + 1]));
      }
    }
  }

  if (before.join("") === after.join("")) {
    return count;
  }
  return 20002;
}

function nonClickZero() {
  let count = 0;

  for (let i = 1; i < before.length; i++) {
    if (before[i - 1] === after[i - 1]) {
      continue;
    } else {
      count += 1;

      before[i - 1] = String(1 - Number(before[i - 1]));
      before[i] = String(1 - Number(before[i]));

      if (i < before.length - 1) {
        before[i + 1] = String(1 - Number(before[i + 1]));
      }
    }
  }

  if (before.join("") === after.join("")) {
    return count;
  }
  return 10002;
}

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
let before = input[1].split("");
let after = input[2].split("");
let tmp = [];

for (let i = 0; i < before.length; i++) {
  tmp[i] = before[i];
}

const nonClicked = nonClickZero(tmp);
const click = clickZero(tmp);

let answer = Math.min(click, nonClicked);

if (answer === 10002) {
  answer = -1;
}

console.log(answer);
