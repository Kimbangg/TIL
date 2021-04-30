const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(cards) {
  let sum = 0;
  cards.sort((a, b) => a - b);
  for (let i = 0; i < M; i++) {
    cards[i] = cards[i] + cards[i + 1];
    cards[i + 1] = cards[i];
  }

  cards.forEach((item) => {
    sum += item;
  });

  return sum;
}

const [N, M] = input[0].split(" ").map((e) => +e);
const cards = [];

for (let i = 0; i < N; i++) {
  cards[i] = Number(input[i]);
}

console.log(solution(cards));
