function solution() {
  let count = 0;
  const map = {};

  for (let i = 0; i < t; i++) {
    const [cow, location] = history[i];

    if (map[cow] === undefined) {
      map[cow] = location;
    } else {
      if (map[cow] !== location) {
        count += 1;
        map[cow] = location;
      }
    }
  }
  return count;
}

const t = 8;

const history = [
  [3, 1],
  [3, 0],
  [6, 0],
  [2, 1],
  [4, 1],
  [3, 0],
  [4, 0],
  [3, 1],
];

solution(t, history);
