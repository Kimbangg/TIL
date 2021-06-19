function solve() {
  let min = new_one[0][1];
  let cnt = 1;

  for (let i = 1; i < n; i++) {
    if (new_one[i][1] < min) {
      cnt += 1;
      min = new_one[i][1];
    }
  }
  console.log(cnt);
}

const n = 5;
const new_one = [
  [1, 4],
  [4, 1],
  [2, 3],
  [3, 2],
  [5, 5],
];

new_one.sort((a, b) => a[0] - b[0]);
console.log(new_one);
solve();
