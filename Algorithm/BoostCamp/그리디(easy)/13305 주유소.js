function solve() {
  let minPrice = perLiter[0];
  let total = 0;

  for (let i = 0; i < N - 1; i++) {
    if (perLiter[i] < minPrice) {
      minPrice = perLiter[i];
    }

    total += minPrice * distance[i];
  }
}

const distance = [2, 3, 1];
const perLiter = [5, 2, 4, 1];

solve();
