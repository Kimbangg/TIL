function solve() {
  let cur = 0;
  let cnt = 0;
  let res = 0;

  for (let i = 0; i < san.length; i++) {
    if (san[i] > cur) {
      cur = san[i];
      res = res > cnt ? res : cnt;
      cnt = 0;
    } else {
      cnt += 1;
    }
  }

  res = res > cnt ? res : cnt;
  console.log(res);
}

let N = 7;

let san = [6, 4, 10, 2, 5, 7, 11];
solve();
