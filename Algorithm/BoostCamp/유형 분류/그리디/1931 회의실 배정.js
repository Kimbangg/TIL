function solve() {
  let end = 0;
  let count = 0;
  let length = time_table.length;

  for (let i = 0; i < length; i++) {
    if (end <= time_table[i][0]) {
      count += 1;
      end = time_table[i][1];
    }
  }

  return count;
}

const time_table = [
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6, 10],
  [8, 11],
  [8, 12],
  [2, 13],
  [12, 14],
];

time_table.sort(function (a, b) {
  if (a[1] === b[1]) {
    a[0] - b[0];
  }
  return a[1] - b[1];
});

solve();
