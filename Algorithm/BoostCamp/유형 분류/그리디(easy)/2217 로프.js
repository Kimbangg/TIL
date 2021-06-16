function solve() {
  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    if (stage[i] < stage[i + 1]) {
      continue;
    }

    count += stage[i] - stage[i + 1] + 1;
  }

  console.log(count);
}

let n = 4;
let stage = [5, 3, 7, 5];
solve();
