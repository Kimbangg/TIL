function solve(num) {
  const card = Array.from({ length: num }, (v, i) => i + 1);

  while (card.length !== 1) {
    card.shift();
    card.push(card.shift());
  }
  return card;
}

let num = 6;
console.log(solve(num));
