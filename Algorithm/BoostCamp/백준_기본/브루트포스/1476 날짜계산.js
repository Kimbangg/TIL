function solve() {
  let year = 1;

  while (true) {
    if (
      (year - E) % 15 === 0 &&
      (year - S) % 28 === 0 &&
      (year - M) % 19 === 0
    ) {
      console.log(year);
      break;
    }
    year += 1;
  }
}

let [E, S, M] = [1, 2, 3];
solve();
