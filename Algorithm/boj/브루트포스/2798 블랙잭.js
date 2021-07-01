function solution() {
  let result = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let tmp = 0;
        tmp = cards[i] + cards[j] + cards[k];

        if (result < tmp && tmp <= M) {
          result = tmp;
        }
      }
    }
  }
  console.log(result);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const NM = input
  .shift()
  .split(" ")
  .map((num) => parseInt(num));
const N = NM.shift();
const M = NM.shift();
const cards = input
  .shift()
  .split(" ")
  .map((num) => parseInt(num));

solution();
