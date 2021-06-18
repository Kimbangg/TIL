function solution(cards) {
  const answer = [];

  for (let i = 0; i < cards.length; i++) {
    let min = Math.min(...cards[i]);
    answer.push(min);
  }

  return Math.max(...answer);
}

let cards = [
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
];

console.log(solution(cards));
