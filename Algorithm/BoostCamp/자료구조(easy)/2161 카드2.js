function solve() {
  const answer = [];

  while (card.length !== 1) {
    answer.push(card.shift());
    card.push(card.shift());
  }

  console.log(answer, card);
}

const num = 7;
const card = Array.from({ length: num }, (v, i) => i + 1);
solve();
